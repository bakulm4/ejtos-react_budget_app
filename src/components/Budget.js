import React, {useState,useContext} from 'react';
import {AppContext} from '../context/AppContext';

const Budget = ()=>{
    const {expenses,budget} = useContext(AppContext);
    const [inputBudget, setInputBudget] = useState(budget);

    const spending = expenses.reduce((total,expense)=>total+expense.cost,0);
    console.log('Spending: ', spending);

    function handleChange(e){
        console.log('HandleChange called value: ', e.target.value );
        const inputValue = parseInt(e.target.value);
        setInputBudget(inputValue);

        if(inputValue > 20000 ){
            alert('Budget cannot exceed  £20,000');
            return;
        }

        if(inputValue < spending){
            alert('You cannot reduce the budget value lower than the spending');
            return;
        }

    }
    return (
        <div className='alert alert-secondary'>
            <label htmlFor='budget'>Budget: £ </label>
            <input id='budget' type='number' max='20000' step='10' min={spending} value={inputBudget} onChange={handleChange}
            style={{width:'50%'}}></input>
        </div>
    );
};

export default Budget;
