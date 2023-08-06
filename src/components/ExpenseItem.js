import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
	const { dispatch ,currency } = useContext(AppContext);

	const handleDeleteExpense = () => {
        const item = {
            name: props.id,
        };
		dispatch({
			type: 'DELETE_EXPENSE',
			payload: item,
		});
	};

	const increaseAllocation = (name) => {
		const expense = {
			name: name,
			cost: 10,
		};

		dispatch({
			type: 'ADD_EXPENSE',
			payload: expense
		});

	}


    const decreaseAllocation = (name) => {
		const expense = {
			name: name,
			cost: 10,
		};

		dispatch({
			type: 'RED_EXPENSE',
			payload: expense
		});

	}
    


	return (
		<tr>
		<td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button
        style={{
            border: 'none',
            fontWeight:'bold',
            backgroundColor: 'green', // Choose your desired color for the increase button
            color: 'white',
            textAlign: 'center',
            borderRadius: '50%', // Make it rounded
            width: '30px', // Adjust the width as needed
            height: '30px', // Adjust the height as needed
        }} onClick={event=> increaseAllocation(props.name)}>+</button></td>
        <td><button
        style={{
            border: 'none',
            backgroundColor: 'red',
            textAlign: 'center',
            fontWeight:'bold', // Choose your desired color for the increase button
            color: 'white',
            borderRadius: '50%', // Make it rounded
            width: '30px', // Adjust the width as needed
            height: '30px', // Adjust the height as needed
        }}
        onClick={event=> decreaseAllocation(props.name)}>-</button></td>
		<td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
		</tr>
	);
};

export default ExpenseItem;