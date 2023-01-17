import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';

const Currency = () => {
    const {currency} = useContext(AppContext);
    return (
        <div>
             <select className='custom-select' id='inputGroupSelect02'>
                <option value='dollar' name='dollar'>$ Dollar</option>
                <option selected value="pound" name='pound'>£ Pound</option>
                <option value="euro" name='euro'>€ Euro</option>
                <option value="rupee" name='rupee'>£ Rupee</option>
            </select>
        </div>
    )
};

export default Currency;