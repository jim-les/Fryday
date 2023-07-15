import React, { useState, useEffect, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
    
const Carts = () => {
    const [cartItems, setCartItems] = useState([]);
    const [discount, setDiscount] = useState(0);

    useEffect(() => {
        // Perform some side effect when cart items change
        console.log('Cart items updated:', cartItems);
    }, [cartItems]);

    const addToCart = (item) => {
        setCartItems((prevCartItems) => [...prevCartItems, item]);
    };

    const removeFromCart = (itemId) => {
        setCartItems((prevCartItems) =>
            prevCartItems.filter((item) => item.id !== itemId)
        );
    };

    const calculateTotalPrice = useMemo(() => {
        let totalPrice = 0;
        cartItems.forEach((item) => {
            totalPrice += item.price;
        });
        return totalPrice.toFixed(2);
    }, [cartItems]);

    const applyDiscount = () => {
        setDiscount(10);
    };

}


const Cart = () => {
    return (
        <div class="container mt- cartPage">
            <p class="cartPageTitle text-primary">Shopping Cart</p>
            <div class="row">
                <div class="col-8">
                    <table class="table">
                        <thead >
                            <tr class="tableHeaders">
                                <th>Item</th>
                                <th>Price</th>
                                <th class="text-center">Qty</th>
                                <th>Subtotal</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td >
                                    <div class="d-flex">
                                        <div class="image_div_cart">
                                            <img src="carousel_1.jpg" alt="" class="cartproductImage" />
                                        </div>
                                        <div>
                                            <p class="product_Name">
                                                <span>Smart Screen LED Tv</span>
                                                <br />
                                                <span>Size: 42"</span>
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p class="product_cart_price">$170.00</p>
                                </td>
                                <td>
                                    <div class="d-flex mx-3">
                                        <span class="cartPlusSign">-</span>
                                        <input type="text" class="form-field cartProductQuontity" value="1" />
                                        <span class="cartMinusSign">+</span>
                                    </div>
                                </td>

                                <td>
                                    <p>$170.00</p>
                                </td>
                                <td>&times;</td>
                            </tr> <tr>
                                <td >
                                    <div class="d-flex">
                                        <div class="image_div_cart">
                                            <img src="carousel_1.jpg" alt="" class="cartproductImage" />
                                        </div>
                                        <div>
                                            <p class="product_Name">
                                                <span>Mens White shoes</span>
                                                <br />
                                                <span>Size: 42"</span>
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p class="product_cart_price">$190.00</p>
                                </td>
                                <td>
                                    <div class="d-flex mx-3">
                                        <span class="cartPlusSign">-</span>
                                        <input type="text" class="form-field cartProductQuontity" value="1" />
                                        <span class="cartMinusSign">+</span>
                                    </div>
                                </td>

                                <td>
                                    <p>$190.00</p>
                                </td>
                                <td>&times;</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col-4">
                    <div class="checkCard">
                        <div class="coupon_div">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Enter coupon" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <div class="input-group-append">
                                    <span class="input-group-text text-light bg-dark" id="basic-addon2">Apply</span>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div>
                            <p class="check_card_title text-primary">ESTIMATE SHIPPING AND TAX</p>

                            <div class="my-3">
                                <label className="text-primary"><b>COUNTRY</b></label>
                                <br />
                                <select name="country text-primary" id="">
                                    <option value="ke">Kenya</option>
                                    <option value="US">United States</option>
                                    <option value="EUR">Europe</option>
                                </select>
                            </div>
                            <div class="my-3">
                                <label className="text-primary"><b>STATE/PROVINCE</b></label>
                                <select name="country text-primary" id="">
                                    <option value="ke">Select a region, state or province</option>
                                    <option value="US">Nairobi</option>
                                    <option value="EUR">Mombasa</option>
                                    <option value="EUR">Kisumu</option>
                                </select>
                            </div>
                            <div>
                                <label className="text-primary"><b>ZIP/POSTAL CODE</b></label>
                                <input type="text" class="form-field" />
                            </div>

                            <div class="mt-5">
                                <div class="d-flex justify-content-between">
                                    <p>Subtotal</p>
                                    <p>$460</p>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <p>Discount</p>
                                    <p>-$100</p>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <p>Shipping Fess</p>
                                    <p>+$10</p>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <p></p>
                                    <p class="totalAmount">$460</p>

                                </div>
                            </div>
                        </div>
                        <div>
                            <button className="bg-primary ">
                                <Link className="text-light text-decoration-none" to="shipping">PAY FOR ORDER</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Cart;