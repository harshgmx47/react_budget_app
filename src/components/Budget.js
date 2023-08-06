import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, currency } = useContext(AppContext);
  const [editableBudget, setEditableBudget] = useState(budget);

  const handleBudgetChange = (event) => {
    const newValue = parseInt(event.target.value);
    if (!isNaN(newValue) && newValue >= 0 && newValue <= 20000) {
      setEditableBudget(newValue);
    }
  };

//   const handleDecrease = () => {
//     if (editableBudget - 10 >= 0) {
//       setEditableBudget(editableBudget - 10);
//     }
//   };

//   const handleIncrease = () => {
//     if (editableBudget + 10 <= 20000) {
//       setEditableBudget(editableBudget + 10);
//     }
//   };

  return (
    <div className='alert alert-secondary'>
      <span>Budget : {currency} 
        <input
          required='required'
          type='number'
          id='cost'
          value={editableBudget}
          onChange={handleBudgetChange}
          style={{ width: 130,  }}
        />
      </span>
    </div>
  );
};

export default Budget;
