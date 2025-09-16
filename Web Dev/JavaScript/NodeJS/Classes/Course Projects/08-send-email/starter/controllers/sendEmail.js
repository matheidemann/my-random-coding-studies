const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');

//ETHEREAL EMAIL
const sendEmailEthereal = async (req, res) => {
	const testAccount = await nodemailer.createTestAccount();

	const transporter = nodemailer.createTransport({
		host: 'smtp.ethereal.email',
		port: 587,
		auth: {
			user: 'mason.vandervort93@ethereal.email',
			pass: 'yq1CRhx8NU4y3UK953',
		},
	});

	let info = await transporter.sendMail({
		from: '"Matheus Heidemann" <heidemann.contato@gmail.com>',
		to: 'heidemann.contato@gmail.com',
		subject: 'Hello',
		html: '<h2>Sending emails with Node.JS</h2>',
	});
	return res.status(200).json(info);
};

const sendEmail = async (req, res) => {
	try {
		sgMail.setApiKey(process.env.SENDGRID_API_KEY);
		const msg = {
			to: 'nicolygalmeida@hotmail.com',
			from: 'heidemann.contato@gmail.com',
			subject: 'OI AMADINHA',
			text: 'AMADINHA MUITO AMADA <3',
			html: '<h1><strong>AMO AMADINHA</strong></h1>',
		};
		const info = await sgMail.send(msg);
		res.json(info);
	} catch (error) {
		res.json(error);
	}
};

module.exports = sendEmail;
