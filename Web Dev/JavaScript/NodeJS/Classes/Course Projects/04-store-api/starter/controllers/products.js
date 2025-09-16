//import Schema
const { geoSearch } = require('../models/product');
const Product = require('../models/product');

const getAllProductsStatic = async (req, res) => {
	//Product.find({}) <= with the empty object on find means that you are getting all the items
	const products = await Product.find({}).sort('-name -price');
	res.status(200).json({ products, nbHits: products.length });
};

const getAllProducts = async (req, res) => {
	//destrcturing only the properties from the query that I want
	const { featured, company, name, sort, fields, page, limit, numericFilters } =
		req.query;

	//creating an empty object to store the query data
	const queryObject = {};

	//check for featured
	if (featured) {
		queryObject.featured = featured === 'true' ? true : false;
	}

	//check for company
	if (company) {
		queryObject.company = company;
	}

	//check for name
	if (name) {
		queryObject.name = { $regex: name, $options: 'i' };
	}

	//numeric filters for price and rating

	//mapping the operators
	if (numericFilters) {
		const operatorMap = {
			'>': '$gt',
			'>=': '$gte',
			'=': '$eq',
			'<': '$lt',
			'<=': '$lte',
		};

		//define the regex
		const regEx = /\b(<|<=|=|>=|>)\b/g;

		//replace the numericFilters expresion to the operatorMap ones
		let filters = numericFilters.replace(
			regEx,
			(match) => `-${operatorMap[match]}-`
		);

		//creating an array of possible options
		const options = ['price', 'rating'];
		//till here we had our converted filters string from "price<00,rating>00" to "price-$lt-00,rating-$gt-00"
		//in the funcionality bellow, we split the string, creating an array, and then we use forEach to modify each string from the new created array. We changed "price-$lt-00,rating-$gt-00" to "[price-$lt-00, rating-$gt-00]"
		filters = filters.split(',').forEach((item) => {
			//now we create an array destructuring, separating the values with the hifens, so only if the field price or rating is in the options, only then we will add a new property on the querryObject
			const [field, operator, value] = item.split('-');
			//now we search if the field provided in included in the options array
			if (options.includes(field)) {
				//now we set the queryObject in the defined field (queryObject.price, e.g.) and it's equal to an object with the operator and the string value converted to a number ({$gt : 10}, e.g.)
				queryObject[field] = { [operator]: Number(value) };
				console.log(queryObject);
			}
		});
	}

	//find the product
	let result = Product.find(queryObject);

	//check for sort
	//if sort exists
	if (sort) {
		const sortArray = sort.split(',').join(' ');
		result = result.sort(sortArray);
	}
	//if sort does not exists
	else {
		result = result.sort('createdAt');
	}

	//select
	if (fields) {
		const fieldsArray = fields.split(',').join(' ');
		result = result.select(fieldsArray);
	}

	//define page for logic
	const currentPage = Number(page) || 1;

	//define limit for logic
	const currentLimit = Number(limit) || 10;

	//pagination
	const skip = (currentPage - 1) * currentLimit;
	result = result.skip(skip).limit(currentLimit);

	//set products to the final result
	const products = await result;

	//response
	res.status(200).json({ products, nbHits: products.length });
};

//export functions
module.exports = { getAllProductsStatic, getAllProducts };
