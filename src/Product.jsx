import React from 'react';
import "./Product.css";
import {useStateValue} from "./StateProvider";

const Product = ({id, title, image, extra}) => {
    const [{}, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
        type: "ADD_TO_BASKET",
        item: {
                id: id,
                title: title,
                image: image
            }
    });
};

    return(
        <>
            <div className="product">
                <h2>{title}</h2>
                <img src={image} alt="Product Image" className="product_image"/>
                <h5 className="extra_link">{extra}</h5>
                {/* <h5 onClick={addToBasket}>See More</h5> */}
            </div>
        </>
    );
}

export default Product;