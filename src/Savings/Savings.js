import React from 'react';
import './Savings.css';

const savings = () => {
   return(
   <div className='Wrapper'>
       <h1>Total savings for each category</h1>
        <ul>
            <li>Restaurant</li>
            <li>Transportation</li>
            <li>Groceries</li>
        </ul>
    </div>
   )
}

export default savings;