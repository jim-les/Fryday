import React, { useState, useEffect, useMemo } from 'react';

const Login = () => {
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


    const Logins = () => {
        return (
            <div className="d-flex justify-content-center align-items-center loginPage mt-5">
                <div className="card">
                    <div className="card-body">
                        <div className="my-3">
                            <p className="title">LOGIN</p>
                        </div>

                        <div className="my-3">
                            <input type="email" className="form-field" name="Username" placeholder="Username" />
                        </div>

                        <div className="my-3">
                            <input type="password" className="form-field" name="Username" placeholder="Password" />
                        </div>

                        <div className="my-3">
                            <input type="submit" value="Submit" className="px-5 text-light" />
                        </div>
                    </div>
                </div>

            </div>
        )
    };

export default Login;
