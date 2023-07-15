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
        <section class="">
            <div class="container-fluid bg-primary text-center py-5">
                <p class="my-2 text-light">Add Coupon to Save up to 10%</p>
            </div>
            <div class="container mx-5">

                <div class="mx-5">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>REMOVE</th>
                                <th>IMAGE</th>
                                <th>PRODUCT</th>
                                <th>PRICE</th>
                                <th>QUANTITY</th>
                                <th>SUBTOTAL</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>&times;</td>
                                <td><img src="img/product-1-1.jpg" class="cart_image_added" alt=""/></td>
                                <td>Cartoon Astronout T-Shirt</td>
                                <td>$118.9</td>
                                <td><input type="number" name="" id="" class="cart_input_quontity" value="1" /></td>
                                <td>$118.9</td>
                            </tr>
                            <tr>
                                <td>&times;</td>
                                <td><img src="img/product-1-1.jpg" class="cart_image_added" alt=""/></td>
                                <td>Cartoon Astronout T-Shirt</td>
                                <td>$118.9</td>
                                <td><input type="number" name="" id="" class="cart_input_quontity" value="1" /></td>
                                <td>$118.9</td>
                            </tr>
                            <tr>
                                <td>&times;</td>
                                <td><img src="img/product-1-1.jpg" class="cart_image_added" alt=""/></td>
                                <td>Cartoon Astronout T-Shirt</td>
                                <td>$118.9</td>
                                <td><input type="number" name="" id="" class="cart_input_quontity" value="1" /></td>
                                <td>$118.9</td>
                            </tr>
                            <tr>
                                <td>&times;</td>
                                <td><img src="img/product-1-1.jpg" class="cart_image_added" alt=""/></td>
                                <td>Cartoon Astronout T-Shirt</td>
                                <td>$118.9</td>
                                <td><input type="number" name="" id="" class="cart_input_quontity" value="1" /></td>
                                <td>$118.9</td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                <div class="row my-5">
                    <div class="col-lg-5">
                        <p><b>Apply Coupon</b></p>
                        <div class="d-flex">
                            <input type="text" class="form-field px-3" placeholder="Enter Your Coupon" />
                            <button class="btn add_cart_btn">Apply</button>
                        </div>
                    </div>

                    <div class="col-lg-5 offset-lg-1">
                        <div class="card">
                            <div class="card-body">
                                <p><b>Cart Totals</b></p>

                                <table class="table table-bordered">
                                    <tr>
                                        <td>Cart Subtotal</td>
                                        <td>$ 335</td>
                                    </tr>
                                    <tr>
                                        <td>Shipping</td>
                                        <td>Free</td>
                                    </tr>
                                    <tr>
                                        <td><b>Total</b></td>
                                        <td><b>$ 335</b></td>
                                    </tr>
                                </table>

                                <Link to="/cart/shipping" class="btn add_cart_btn">PROCUDE TO CHECKOUT</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Cart;