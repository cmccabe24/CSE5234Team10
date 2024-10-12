import React from 'react';
import {useNavigate} from 'react-router-dom';
import '../static/shippingEntry.css'
const ShippingEntry = ({handleInputChange}) => {

    // changed to const from let because we won't be reassigning location 
    const navigate = useNavigate();

    //const  prevOrder = location.state.order;
	//const [order, setOrder] = useState(prevOrder); 


    const handleSubmit = (e) => {
        //navigate('/home/viewOrder', { state: { order: order } });
        navigate('/home/viewOrder');
    }


    return (
        <div class= "shippingEntryCss">
            <h2> Shipping Information </h2>
            <form onSubmit={handleSubmit}>
                <label>Address 1</label>
                <br />
                <input
                    type='text'
                    name='address_1'
                    required
                    onChange={handleInputChange}
                />
                <br/>
                
                <label>Address 2</label>

                <br />
                <input
                    type='text'
                    name='address_2'
                    onChange={handleInputChange}
                />
                <br/>
            
                <label>City</label>
                <br />
                <input
                    type='text'
                    name='city'
                    required
                    onChange={handleInputChange}
                />
                <br/>
            
                <label>State</label>
                <br />
                <input
                    type='text'
                    name='state'
                    required
                    onChange={handleInputChange}
                />
                <br/>
            
                <label>Zip Code</label>
                <br />
                <input
                    type='number'
                    name='zip'
                    required
                    onChange={handleInputChange}
                />
                <br/>
            
                <button className='button'>Review order</button>
            </form>
        </div>
    );
};

export default ShippingEntry;