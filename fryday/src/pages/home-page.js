import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import image1 from "./warranty/bh-new-price-match.jpg";



const products = [
    {
        id: 1,
        name: 'Smart Screen LED TV',
        description: 'This is the description of Product 1.',
        Price: '$170.00',
        previous_price: '$200.01'
    },
    {
        id: 2,
        name: 'White Men Shoes',
        description: 'This is the description of Product 2.',
        Price: "$84.50",
        previous_price: '95.00'
    },
    {
        id: 3,
        name: 'SamSung Galaxy S10',
        Price: '$120.00',
        previous_price: '150.00',
    },

    {
        id: 4,
        name: 'Apple Laptop',
        Price: '$950.00',
        previous_price: "1000.01"
    },
    {
        id: 5,
        name: 'Smart Screen LED TV',
        description: 'This is the description of Product 1.',
        Price: '$170.00',
        previous_price: '$200.01'
    },
    {
        id: 6,
        name: 'White Men Shoes',
        description: 'This is the description of Product 2.',
        Price: "$84.50",
        previous_price: '95.00'
    },
    {
        id: 7,
        name: 'SamSung Galaxy S10',
        Price: '$120.00',
        previous_price: '150.00',
    },

    {
        id: 8,
        name: 'Apple Laptop',
        Price: '$950.00',
        previous_price: "1000.01"
    }
    // Add more products as needed
];



const Home = () => {
    return (
        <div>
            <section class="carousel-section my-5">
                <div class="container pt-4">
                    <div class="row">
                        <div class="col-lg-5">
                            <div>
                                <p class="carousel_info_one">Hot promotions</p>
                                <h2 class="carousel_info_two">Fashion Trending</h2>
                                <h1 class="carousel_info_three">Great Collection</h1>
                                <p><small class="carousel_info_four">Save more with coupons & up to 20% off</small></p>
                                <button class="btn shopNow">Shop Now</button>
                            </div>
                        </div>

                        <div class="col-lg-7">
                            <div>
                                <img src="{myImage]" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="popular_category_section">
                <div class="container">
                    <div class="d-flex justify-content-between">
                        <p class="title"><span>Popular</span> Category</p>

                        <div class="d-flex">
                            <i class="fa fa-angle-left control_scrollers"></i>
                            <i class="fa fa-angle-right control_scrollers"></i>
                        </div>
                    </div>

                    <div class="d-flex overflow-x-scroll">
                        <div class="popularProductItem mx-2">
                            <div class="image_div">
                                <img src="img/category-8.jpg" alt="" class="w-100" />
                            </div>

                            <div class="text-center mt-2">
                                <p><b>Hots</b></p>
                            </div>
                        </div>

                        <div class="popularProductItem mx-2">
                            <div class="image_div">
                                <img src="img/category-1.jpg" alt="" class="w-100" />
                            </div>

                            <div class="text-center mt-2">
                                <p><b>T-Shirt</b></p>
                            </div>
                        </div>

                        <div class="popularProductItem mx-2">
                            <div class="image_div">
                                <img src="img/category-2.jpg" alt="" class="w-100" />
                            </div>

                            <div class="text-center mt-2">
                                <p><b>Bags</b></p>
                            </div>
                        </div>

                        <div class="popularProductItem mx-2">
                            <div class="image_div">
                                <img src="img/category-3.jpg" alt="" class="w-100" />
                            </div>

                            <div class="text-center mt-2">
                                <p><b>Sandal</b></p>
                            </div>
                        </div>

                        <div class="popularProductItem mx-2">
                            <div class="image_div">
                                <img src="img/category-4.jpg" alt="" class="w-100" />
                            </div>

                            <div class="text-center mt-2">
                                <p><b>Scarf Cap</b></p>
                            </div>
                        </div>

                        <div class="popularProductItem mx-2">
                            <div class="image_div">
                                <img src="img/category-5.jpg" alt="" class="w-100" />
                            </div>

                            <div class="text-center mt-2">
                                <p><b>Shoes</b></p>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            <section class="featured_section mt-5 pt-5">
                <div class="container">
                    <div class="featuredTabs_div d-flex mb-3">
                        <button class="featured_tab">Featured</button>
                        <button class="popular_tab">Popular</button>
                        <button class="newAdded_tab">New Added</button>
                    </div>

                    <div class="row">
                        <div class="col-lg-3 my-2">
                            <div class="featured_products">
                                <div>
                                    <img src="img/product-1-1.jpg" alt="" class="w-100" />
                                </div>

                                <div>
                                    <p class="category">Clothing</p>
                                    <p class="product_name">Colourful Pattern Shirts</p>
                                    <p class="stars_rating">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                    </p>

                                    <div class="d-flex justify-content-between">
                                        <div class="d-flex">
                                            <p class="current_price">$238.85</p>
                                            <p class="previous_price">$238.85</p>
                                        </div>
                                        <i class="fa fa-clipboard mx-3"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 my-2">
                            <div class="featured_products">
                                <div>
                                    <img src="img/product-2-1.jpg" alt="" class="w-100" />
                                </div>

                                <div>
                                    <p class="category">Clothing</p>
                                    <p class="product_name">Colourful Pattern Shirts</p>
                                    <p class="stars_rating">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                    </p>

                                    <div class="d-flex justify-content-between">
                                        <div class="d-flex">
                                            <p class="current_price">$238.85</p>
                                            <p class="previous_price">$238.85</p>
                                        </div>
                                        <i class="fa fa-clipboard mx-3"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 my-2">
                            <div class="featured_products">
                                <div>
                                    <img src="img/product-3-1.jpg" alt="" class="w-100" />
                                </div>

                                <div>
                                    <p class="category">Clothing</p>
                                    <p class="product_name">Colourful Pattern Shirts</p>
                                    <p class="stars_rating">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                    </p>

                                    <div class="d-flex justify-content-between">
                                        <div class="d-flex">
                                            <p class="current_price">$238.85</p>
                                            <p class="previous_price">$238.85</p>
                                        </div>
                                        <i class="fa fa-clipboard mx-3"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 my-2">
                            <div class="featured_products">
                                <div>
                                    <img src="img/product-4-1.jpg" alt="" class="w-100" />
                                </div>

                                <div>
                                    <p class="category">Clothing</p>
                                    <p class="product_name">Colourful Pattern Shirts</p>
                                    <p class="stars_rating">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                    </p>

                                    <div class="d-flex justify-content-between">
                                        <div class="d-flex">
                                            <p class="current_price">$238.85</p>
                                            <p class="previous_price">$238.85</p>
                                        </div>
                                        <i class="fa fa-clipboard mx-3"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 my-2">
                            <div class="featured_products">
                                <div>
                                    <img src="img/product-5-1.jpg" alt="" class="w-100" />
                                </div>

                                <div>
                                    <p class="category">Clothing</p>
                                    <p class="product_name">Colourful Pattern Shirts</p>
                                    <p class="stars_rating">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                    </p>

                                    <div class="d-flex justify-content-between">
                                        <div class="d-flex">
                                            <p class="current_price">$238.85</p>
                                            <p class="previous_price">$238.85</p>
                                        </div>
                                        <i class="fa fa-clipboard mx-3"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 my-2">
                            <div class="featured_products">
                                <div>
                                    <img src="img/product-6-1.jpg" alt="" class="w-100" />
                                </div>

                                <div>
                                    <p class="category">Clothing</p>
                                    <p class="product_name">Colourful Pattern Shirts</p>
                                    <p class="stars_rating">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                    </p>

                                    <div class="d-flex justify-content-between">
                                        <div class="d-flex">
                                            <p class="current_price">$238.85</p>
                                            <p class="previous_price">$238.85</p>
                                        </div>
                                        <i class="fa fa-clipboard mx-3"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 my-2">
                            <div class="featured_products">
                                <div>
                                    <img src="img/product-7-1.jpg" alt="" class="w-100" />
                                </div>

                                <div>
                                    <p class="category">Clothing</p>
                                    <p class="product_name">Colourful Pattern Shirts</p>
                                    <p class="stars_rating">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                    </p>

                                    <div class="d-flex justify-content-between">
                                        <div class="d-flex">
                                            <p class="current_price">$238.85</p>
                                            <p class="previous_price">$238.85</p>
                                        </div>
                                        <i class="fa fa-clipboard mx-3"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 my-2">
                            <div class="featured_products">
                                <div>
                                    <img src="img/product-8-1.jpg" alt="" class="w-100" />
                                </div>

                                <div>
                                    <p class="category">Clothing</p>
                                    <p class="product_name">Colourful Pattern Shirts</p>
                                    <p class="stars_rating">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                    </p>

                                    <div class="d-flex justify-content-between">
                                        <div class="d-flex">
                                            <p class="current_price">$238.85</p>
                                            <p class="previous_price">$238.85</p>
                                        </div>
                                        <i class="fa fa-clipboard mx-3"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="deals_section my-5">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="deal_div w-100 p-4">
                                <h3 class="deal_label_one">Deal of the Day</h3>
                                <p class="deal_label_two">Limited quontites</p>
                                <p>Summer Collection New <br/
                                > Morder design</p>
                                <p><span class="text-danger"><b>$139.00</b></span> <span class="text-decoration-line-through">$160.99</span></p>

                                <p>Hurry Up! Offer End In:</p>
                                <div class="timer d-flex">
                                    <div class="days_div text-center">
                                        <div class="days">02</div>
                                        <label for="">Days</label>
                                    </div>
                                    <p class="mx-2 mt-2">:</p>
                                    <div class="hour_div text-center">
                                        <div class="days">22</div>
                                        <label for="">Hours</label>
                                    </div>
                                    <p class="mx-2 mt-2">:</p>
                                    <div class="min_div text-center">
                                        <div class="days">52</div>
                                        <label for="">Mins</label>
                                    </div>
                                    <p class="mx-2 mt-2">:</p>
                                    <div class="min_div text-center">
                                        <div class="days">24</div>
                                        <label for="">Sec</label>
                                    </div>
                                </div>

                                <button class="deals_shop_now my-2">Shop Now</button>
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="deal2_div w-100 p-4">
                                <h3 class="deal_label_one">Women Clothing</h3>
                                <p class="deal_label_two">Shirt & Bag</p>
                                <p>Try something new on<br/> vocation</p>
                                <p><span class="text-danger"><b>$178.00</b></span> <span class="text-decoration-line-through">$256.99</span></p>

                                <p>Hurry Up! Offer End In:</p>
                                <div class="timer d-flex">
                                    <div class="days_div text-center">
                                        <div class="days">02</div>
                                        <label for="">Days</label>
                                    </div>
                                    <p class="mx-2 mt-2">:</p>
                                    <div class="hour_div text-center">
                                        <div class="days">22</div>
                                        <label for="">Hours</label>
                                    </div>
                                    <p class="mx-2 mt-2">:</p>
                                    <div class="min_div text-center">
                                        <div class="days">52</div>
                                        <label for="">Mins</label>
                                    </div>
                                    <p class="mx-2 mt-2">:</p>
                                    <div class="min_div text-center">
                                        <div class="days">24</div>
                                        <label for="">Sec</label>
                                    </div>
                                </div>

                                <button class="deals_shop_now my-2">Shop Now</button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
