import React, { useContext, useState } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
    const { expenses,dispatch,budget } = useContext(AppContext);
    const [display,setDisplay] = useState(false);
    const [name,setName] = useState('');
    const [price,setPrice] = useState();

    const spent = expenses.reduce((prev,e)=>prev+parseInt(e.unitprice),0)    
    
    const submitEvent = (e) => {
      if(e === "Save")
      {
        if(price < 0)
        return alert("Please enter value greater than 0")
        if(name !== '' && price >= 0)
        {
          if(price <= (budget-spent)){ 
            const item = {
              id : name,
              name: name,
              quantity: 0,
              unitprice: parseInt(price),
            };
            dispatch({
              type: 'ADD_ITEM',
              payload: item,
            });
            setName('') 
            setPrice()
            setDisplay(false)
          }
          else
            alert("You Cannot exceed Allocation Price then the remaining budget " + (budget-spent))
        }
        else
          alert("Please Fill both Inputs")
      }
      else if(e == "Cancel")
      {
        setDisplay(false)
      }    
      else
        return;
    };

    return (
        <table className='table'>
              <thead className="thead-light">
            <tr>
              <th scope="col">Department</th>
              <th scope="col">Allocated Budget</th>
              <th scope="col">Increase by 10</th>
              <th scope="col">Decrease by 10</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
            <tbody>
            {expenses.map((expense) => (          
                <ExpenseItem id={expense.id} key={expense.id} name={expense.name} quantity={expense.quantity} unitprice={expense.unitprice} />
            ))}
            {display?(<tr>
              <td><input type="text" name="" id="" onChange={(e)=>setName(e.target.value)} placeholder='Enter Name'/></td>
              <td><input type="number" name="" id="" onChange={(e)=>setPrice(e.target.value)} placeholder='Enter Allocated Budget'/></td>
              <td><button className="btn btn-success" onClick={()=>submitEvent("Save")}>Save</button></td>
              <td><button className="btn btn-danger" onClick={()=>submitEvent("Cancel")}>Cancel</button></td>
            </tr>):
            (<tr><td><button className="btn btn-primary" onClick={()=>setDisplay(true)}>ADD NEW</button></td></tr>)}
            </tbody>
            
        </table>
    );
};

export default ExpenseList;