import React from 'react'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import './Checkout.css';
const Checkout = () => {
    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/vineet/emifestjuly/ICICI_ILM_640x45._CB409142168_.jpg"
                    alt="" />
                {
                    basket.length === 0 ? (
                        <div>
                            <h2>Your Shopping Basket is Empty</h2>
                            <p>You have no items in your shopping basket. To buy one or more items "Add to basket" next to item</p>
                        </div>
                    ) : (
                            <div>
                                <h2>Your Shopping Basket</h2>
                                <hr></hr>
                                {
                                    basket.map((item) => (
                                        <CheckoutProduct
                                            key={item.id}
                                            id={item.id}
                                            title={item.title}
                                            image={item.image}
                                            price={item.price}
                                            rating={item.rating}
                                        />
                                    ))
                                }
                            </div>
                        )}
            </div>
            {
                basket.length > 0 && (
                    <div className="checkout_right">
                        <Subtotal />
                    </div>
                )}
        </div>
    )
}

export default Checkout;
