import React from 'react';

const Popup = (props) => {
    return(
        <>
        <div className="popup">
        <div className="inner_popup">
            <div>Choose your location</div>
            <p>Delivery options and delivery speeds may vary for different locations</p>
            <button className="signin_button">Sign in to see your addresses</button>
            <p>or enter a Canada postal code</p>
            <input type="text" /><input type="text" /><button>Apply</button>
            <p>--------or---------</p>
            <select name="drop" id="">
                <option value="1">Ship outside Canada</option>
            </select>
        </div>
        </div>
        </>
    );
}

export default Popup;