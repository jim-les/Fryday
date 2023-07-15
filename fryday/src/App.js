import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home-page';
import Products from './pages/ProductDetails'
import Cart from './pages/Cart';
import Login from './pages/Login'
import Shipping from './pages/Shipping'
//import FilteredItems from './pages/Filter';
import './App.css';
import './App3.css';


const App = () => {

    return (


        <Router>
            <section class="navbar_section sticky-top">
                <div class="container-fluid upper_navbar">
                    <div class="container d-flex justify-content-between">
                        <div class="d-flex justify-content-between">
                            <p class="call_number">(+1)-234-5678</p>
                            <p class="navbar-location mx-4">Our location</p>
                        </div>

                        <div>
                            <p>Super value Deals-Save more with coupons</p>
                        </div>

                        <div class="accounts">
                            <p><a href="" class="text-decoration-none text-dark">Login</a>/ <a class="text-decoration-none text-dark" href="">SignUp</a></p>
                        </div>
                    </div>
                </div>

                <nav>
                    <div class="container py-4">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="d-flex justify-content-around">
                                <h2 class="webTitle">GlobalBazaar</h2>
                                <i class="fa fa-house text-success"></i>

                                <div class="navbarList_div">
                                    <ul class="navbar_list d-flex justify-content-between align-items-center py-2">
                                        <li class="navItem mx-2"><Link class="text-decoration-none active" to="/">Home</Link></li>
                                        <li class="navItem mx-2"><a class="text-decoration-none text-dark" href="">Shop</a></li>
                                        <li class="navItem mx-2"><a class="text-decoration-none text-dark" href="">My Account</a></li>
                                        <li class="navItem mx-2"><a class="text-decoration-none text-dark" href="">Compare</a></li>
                                        <li class="navItem mx-2"><a class="text-decoration-none text-dark" href="">Login</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="d-flex">
                                <div class="mx-4">
                                    <input type="text" class="form-field search_input_box" placeholder="Search for Item" />
                                </div>

                                <div>
                                    <i class="fa fa-user mx-3"></i>
                                    <Link to="/cart"><i class="fa fa-shopping-cart mx-3"></i></Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </nav>
            </section>
            


            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="cart/shipping" element={<Shipping />} />
                <Route path="/product/:productId" element={<Products />} />
            </Routes>

            <footer>
                <div class="container-fluid">
                    <div class="call_to_action">
                        <div class="container d-flex justify-content-between align-items-center">
                            <div class="d-flex align-items-center">
                                <i class="fa fa-envelope"></i>
                                <p class="mx-2 mt-3">Sign up to Newsletter</p>
                            </div>

                            <p><small>...and recieved $25 coupons for first shopping.</small></p>
                            <div class="mt-2">
                                <input type="text" class="form-field email_input" placeholder="Enter your email" />
                                <input class="btn bg-dark text-light" type="submit" value="SUBSCRIBE" />
                            </div>
                        </div>
                    </div>

                    <div class="row mt-5">
                        <div class="col-lg-3">
                            <h3>GlobalBazaar</h3>
                            <address>
                                <b>Address:</b> 98736 Newyork <br />
                                <b>Phone:</b> (+1)-123-4567 <br />
                                <b>Hours:</b> 10:00 - 18:00, Mon - sat
                            </address>
                        </div>

                        <div class="col-lg-3">
                            <h3>Address</h3>
                            <ul>
                                <li>About Us</li>
                                <li>Delivery Information</li>
                                <li>Privacy Plicy</li>
                                <li>Terms & Conditions</li>
                                <li>Contact Us</li>
                                <li>Support Center</li>
                            </ul>
                        </div>

                        <div class="col-lg-3">
                            <h3>My Account</h3>
                            <ul>
                                <li>Sign in</li>
                                <li>Visa cart</li>
                                <li>My whishlist</li>
                                <li>Track My Order</li>
                                <li>Help</li>
                                <li>Order</li>
                            </ul>
                        </div>

                        <div class="col-lg-3">
                            <h3>Secured Payment Gateways</h3>

                            <img src="img/payment-method.png" alt=""/>
                        </div>
                    </div>
                </div>
            </footer>
        </Router>
        

            
        //</Router>
    );
};

export default App;
