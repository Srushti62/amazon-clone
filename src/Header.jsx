import React from 'react';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import amazonLogo from "C:/Users/My PC/react-projects/amazon-clone/src/amazonLogo.png";
import {useStateValue} from "./StateProvider";
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import flag from "../src/CanadaFlag.svg";
import "./Header.css";

const Header = () => {
    const [{basket}] = useStateValue();
    const [popup, setpopup] = useStateValue(false);

    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'blue'
      };
      
    return(
        <>
        <nav className="header">
        {/* Logo start */}
        <Link to="/" className="logo">
            <img className="header_logo" src="amazon_logo.png" alt="logo" /><h1 className="ca">.ca</h1>
        </Link>

        {/* Address start*/}
        <Link to="/" onClick={() => setpopup(true)} className="header_link">
            <div className="header_location">
                <LocationOnOutlinedIcon fontSize="large" />
            <div className="header_option">
                <span className = "header_optionLineOne">Hello</span>
                <span className = "header_optionLineTwo">Select Your Address</span>
            </div>
            </div>
        </Link>
        {/* {popup ? <Popup /> : } */}

        {/* <Popup {popup} ? /> */}

        {/* Search bar start */}
        <div className="header_search">
            <input type="text" className="header_searchInput" />
            <SearchIcon className="header_searchIcon" />
        </div>

        {/* Country Flag start */}
        <Link to="/" className="country_dropdown">
            <img className="flag" src={flag} alt="logo" />
        </Link>


        {/* 2 more fields start */}
        <div className="header_nav">
        <Link to="/login" className="header_link">
            <div className="header_option">
                <span className = "header_optionLineOne">Hello, Sign In</span>
                <span className = "header_optionLineTwo">Accounts & Lists</span>
            </div>
            {/* <select name="" id="" className="header_signinDropdown">
                <option value="few"></option>
            </select> */}
        </Link>

        <Link to="/" className="header_link">
            <div className="header_option">
                <span className = "header_optionLineOne">Returns</span>
                <span className = "header_optionLineTwo">& Orders</span>
            </div>
        </Link>

        <Link to="/checkout" className="header_link">
            <div className="header_optionBasket">
                <AddShoppingCartIcon fontSize="large"/>
                <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
                <span className="header_optionLineTwo">Cart</span>
            </div>
        </Link>
        </div>

        {/* Shopping Cart start */}
        </nav>
        </>
    );
}

export default Header;