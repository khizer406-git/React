import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Location = () => {
  const {dispatch,expenses,budget,Location } = useContext(AppContext);
  const [state,setState] = useState('(£) Pound');

    const changeLocation = (val)=>{
            setState(val);
            dispatch({
                type: 'CHG_LOCATION',
                payload: val[1],
            })
    }
    const spent = expenses.reduce((prev,e)=>prev+parseInt(e.unitprice),0)    

    const changeBudget = (val)=>{
      console.log(val)
      dispatch({
          type: 'CHG_BUDGET',
          payload: val,
      })
}
    

  return (
        <div style={{display:'grid',gridTemplateColumns: 'repeat(1,2fr 1fr 1fr 1fr)',gap:50}}>
          <span className='alert alert-secondary mx-0'>
            Budget: &nbsp;&nbsp;&nbsp;&nbsp;{Location}&nbsp;
            <input
              required='required'
              type='number'
              id='cost'
              value={budget}
              style={{size: 10}}
              onChange={(event) => event.target.value>=spent && event.target.value<=20000 ? changeBudget(event.target.value): event.target.value<=spent ? alert("Cannot reduce Budget Lower than spending") : alert("Cannot exceed Budget greater than 20000")}>
            </input>
          </span>
          <span className='alert alert-success mx-0 'style={{justifyContent:'center',alignItems:'center',display:'flex'}}>
              Remaining: {Location}&nbsp;{budget-expenses.reduce((prev,e)=>prev+e.unitprice,0)}

          </span>
          <span className='alert alert-primary'>
            Spent so far {Location}&nbsp;{expenses.reduce((prev,e)=>prev+e.unitprice,0)}
          </span>

        <div className="currency-label mx-0 alert alert-success" style={{ backgroundColor: 'lightgreen', borderColor: 'lightgreen', display: 'inline-block', position: 'relative' }}>
          Currency {state}
          <select
            className='alert alert-success'
            style={{ backgroundColor: 'lightgreen', borderColor: 'lightgreen', position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', opacity: '0', cursor: 'pointer' }}
            name="Location"
            id="Location"
            onChange={event => changeLocation(event.target.value)}
          >
            <option value="($) Dollar">($) Dollar</option>
            <option value="(£) Pound">(£) Pound</option>
            <option value="(€) Euro">(€) Euro</option>
            <option value="(₹) Rupee">(₹) Rupee</option>
          </select>
        </div>      
    </div>
    );
};

export default Location;