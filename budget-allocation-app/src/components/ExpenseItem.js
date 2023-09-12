import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaTimesCircle,FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

const ExpenseItem = (props) => {
    const { dispatch, Location} = useContext(AppContext);

    const handleDeleteItem = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'DELETE_ITEM',
            payload: item,
        });
    };

    const handleChange = (e) => {
        const item = {
            name: props.name,
            price: parseInt(e),
        };
        console.log(parseInt(e))
        if(parseInt(e) == 10)
            dispatch({
                type: 'ADD_PRICE',
                payload: item,
            });
        else
            dispatch({
                type: 'RED_PRICE',
                payload: item,
            });
    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{Location}{parseInt(props.unitprice)}</td>
        <td><FaPlusCircle size='2.2em' color="green" onClick={()=>handleChange(10)}></FaPlusCircle></td>
        <td><FaMinusCircle size='2.2em' color="darkred" onClick={()=>handleChange(-10)}></FaMinusCircle></td>
        <td><FaTimesCircle size='1em' color="gray" onClick={handleDeleteItem}></FaTimesCircle></td>
        </tr>
    );
};

export default ExpenseItem;