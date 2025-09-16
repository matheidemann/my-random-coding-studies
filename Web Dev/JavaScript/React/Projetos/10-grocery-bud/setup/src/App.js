import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

const getLocalStorage = () => {
	let localStorageData = localStorage.getItem('list');
	if (localStorageData) {
		return JSON.parse(localStorage.getItem('list'));
	} else {
		return [];
	}
};

function App() {
	const [name, setName] = useState('');
	const [list, setList] = useState(getLocalStorage());
	const [isEditing, setisEditing] = useState(false);
	const [editID, setEditID] = useState(null);
	const [alert, setAlert] = useState({
		show: false,
		msg: '',
		type: '',
	});

	useEffect(() => {
		localStorage.setItem('list', JSON.stringify(list));
	}, [list]);

	const handleSubmit = (e) => {
		e.preventDefault();
		//IF THERE IS NO NAME
		if (!name) {
			showAlert(true, 'please enter a value', 'danger');
		}
		//EDIT VALUE
		else if (name && isEditing) {
			setList(
				list.map((item) => {
					if (item.id === editID) {
						return { ...item, title: name };
					}
					return item;
				})
			);
			setisEditing(false);
			showAlert(true, 'item edited', 'success');
			setName('');
		}
		//ADD VALUE
		else {
			const newItem = { title: name, id: new Date().getTime().toString() };
			setList([...list, newItem]);
			showAlert(true, 'item added to the list', 'success');
			setName('');
		}
	};

	const showAlert = (show = false, msg = '', type = '') => {
		setAlert({ show, msg, type });
	};

	const clearList = () => {
		setList([]);
		showAlert(true, 'list cleared', 'success');
		if (isEditing) {
			setisEditing(false);
			setName('');
		}
	};

	const removeItem = (id) => {
		setList(list.filter((item) => item.id !== id));
		showAlert(true, 'item removed', 'danger');
		if (isEditing) {
			setisEditing(false);
			setName('');
		}
	};

	const editItem = (id) => {
		const itemToEdit = list.find((item) => item.id === id);
		setisEditing(true);
		setEditID(id);
		setName(itemToEdit.title);
		console.log(itemToEdit);
	};

	return (
		<section className='section-center'>
			<form className='grocery-form' onSubmit={handleSubmit}>
				{alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
				<h3>grocery bud</h3>
				<div className='form-control'>
					<input
						className='grocery'
						type='text'
						placeholder='e.g. eggs'
						value={name}
						onChange={(e) => {
							setName(e.target.value);
						}}></input>
					<button className='submit-btn' type='submit'>
						{isEditing ? 'edit' : 'submit'}
					</button>
				</div>
			</form>

			{list.length > 0 && (
				<div className='grocery-container'>
					<List items={list} removeItem={removeItem} editItem={editItem} />
					<button className='clear-btn' onClick={() => clearList()}>
						clear items
					</button>
				</div>
			)}
		</section>
	);
}

export default App;
