import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Homepage';
import Products from './pages/ProductDetails'
import Cart from './pages/Cart';
import Login from './pages/Login'
import Shipping from './pages/Shipping'
//import FilteredItems from './pages/Filter';
import './App.css';
import './App2.css';


const App = () => {

    return (


        <Router>
            <section class="home_page">
                <nav>
                    <div class="call_to_action">
                        <p>Call Us on : +(1)029*****</p>
                    </div>
                    <div class="tope_nav d-flex align-items-center justify-content-between py-4">
                        <div class="search_div mx-3">
                            <i class="fa fa-search nav_search_icon"></i>
                            <input type="search" name="search" id="search_input" placeholder="Search Here" />
                        </div>

                        <div class="web_title">
                            <i class="fa fa-shop"></i>
                            Quadric Shop
                        </div>

                        <div class="nav_web_socials mx-5 d-flex justify-content-around">
                            <div class="mx-3">
                                <i class="fa fa-user icon"></i>
                                <i class="fa fa-angle-down"></i>
                                Username
                            </div>

                            <div class="mx-3">
                                <Link to='/cart'>
                                    <i class="fa fa-shopping-cart icon"></i>
                                </Link>
                                <i class="fa fa-angle-down"></i>
                            </div>
                        </div>
                    </div>

                    <div class="bottom_nav_div sticky-top">
                        <ul class="bottom_nav">
                            <li class="navItem">
                                <a href="" class="navLink"><Link className="text-decoration-none" to="/">HOME</Link></a>
                            </li>
                            <li class="navItem">
                                <a href="" class="navLink">BEAUTY</a>
                            </li>
                            <li class="navItem">
                                <a href="" class="navLink">WOMEN'S</a>
                            </li>
                            <li class="navItem">
                                <a href="" class="navLink">KITCHEN</a>
                            </li>
                            <li class="navItem">
                                <a href="" class="navLink">SPORTS</a>
                            </li>
                            <li class="navItem">
                                <a href="" class="navLink">ACCESSORIES</a>
                            </li>
                            <li class="navItem">
                                <a href="" class="navLink">ARRIVALS</a>
                            </li>
                            <li class="navItem">
                                <a href="" class="navLink">BEST SELLER</a>
                            </li>
                            <li class="navItem">
                                <a href="" class="navLink">OTHERS</a>
                            </li>
                        </ul>
                    </div>
                </nav>


            </section>

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

                        <div className="text-center">
                            <p><Link>Forgot Password</Link></p>
                        </div>
                        <div className="my-3">
                            <input type="submit" value="Submit" className="px-5 text-light" />
                        </div>

                        <div className="text-center">
                            <p>Don't have an<Link>Signup?</Link></p>
                        </div>
                    </div>
                </div>

            </div>
            )


            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="cart/shipping" element={<Shipping />} />
                <Route path="/product/:productId" element={<Products />} />
            </Routes>
        </Router>
        

            
        //</Router>
    );
};

export default App;
