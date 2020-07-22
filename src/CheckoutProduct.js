import React from 'react';
import { useStateValue } from './StateProvider';
import './CheckoutProduct.css';

function CheckoutProduct({ id, title, price, rating, image, }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            item: {
                id: id
            }
        });
    }

    return (
        <div>
            <div className="checkout_product">
                <img className="checkoutProduct_img" src={image} alt="" />
                <div className="checkoutProduct_info">
                    <p className="checkoutProduct_title">{title}</p>
                    <p className="checkoutProduct_price">
                        <span>£</span>
                        <strong>{price}</strong>
                    </p>
                    <div className="checkoutProduct_rating">
                        {Array(rating)
                            .fill()
                            .map((_, i) => (
                                <span role="img" aria-label="star">⭐️</span>)
                            )}
                    </div>
                    <button onClick={removeFromBasket}>Remove From Basket</button>
                </div>
            </div>
        </div>
    )
}

export default CheckoutProduct
