import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const {dispatch } = useContext(AppContext);

    const changeLocation = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    const selectStyle = {
        backgroundColor: 'green', // Set the background color to green
        color: 'white', // Set the text color to white
        borderRadius: '5px', // Add rounded corners to the dropdown
        border: 'none', // Remove the default border
        cursor: 'pointer', // Show pointer cursor on hover
      };
    

  return (
        <div className='alert alert-success'> Currency  {
      <select name="Currency" 
      id="currency" 
      onChange={event=>changeLocation(event.target.value)}
      style={selectStyle}>
        <option value="£">Uk(£)</option>
        <option value="₹">India(₹)</option>
        <option value="€">Europe(€)</option>
        <option value="CAD">Canada(CAD)</option>
      </select>	
      }	
    </div>
    );
};

export default Currency;