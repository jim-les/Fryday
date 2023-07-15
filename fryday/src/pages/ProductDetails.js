import React from 'react';
import { useParams } from 'react-router-dom';

const products = [
    {
        id: 1,
        name: 'Smart Screen LED TV',
        description: 'This is the description of Product 1.',
        Price: '$170.00'
    },
    {
        id: 2,
        name: 'White Men Shoes',
        description: 'This is the description of Product 2.',
        Price: "$84.50",
    },
    // Add more products as needed
];

const ProductDetails = () => {
    const { productId } = useParams();
    const product = products.find((product) => product.id === parseInt(productId));

    if (!product) {
        return <div>Product not found</div>;
    } 

    return (
        <div>
            <section class="cart_section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5">
                            <div>
                                <img src="img/product-1-1.jpg" alt="" class="w-100"/>
                            </div>

                            <div class="row my-2">
                                <div class="col-lg-3">
                                    <img src="img/product-1-1.jpg" alt="" class="w-100"/>
                                </div>
                                <div class="col-lg-3">
                                    <img src="img/product-1-2.jpg" alt="" class="w-100"/>
                                </div>
                                <div class="col-lg-3">
                                    <img src="img/product-2-1.jpg" alt="" class="w-100"/>
                                </div>
                                <div class="col-lg-3">
                                    <img src="img/product-2-2.jpg" alt="" class="w-100"/>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="d-flex">
                                <p>Home / T-Shirt</p>
                            </div>

                            <div>
                                <p class="cart-product-name"><b>Men's Fashion T Shirt</b></p>
                                <p class="cart_product_title"><b>$139.00</b></p>
                                <select name="" id="">
                                    <option value="">Select Size</option>
                                    <option value="">xs</option>
                                    <option value="">S</option>
                                    <option value="">M</option>
                                    <option value="">L</option>
                                </select>


                            </div>

                            <div class="my-5">
                                <input type="number" name="" id="" class="cart_input_quontity" />
                                <button class="add_cart_btn btn">Add To Cart</button>
                            </div>
                            <div>
                                <p><b>Product Details</b></p>
                                <p>
                                    The Gildan Ultra Cotton T-shirt made from a substantial 6.O.oz. per aq yd.
                                    fabric construcked from 100% cotton, this classic fir preshpunk jersey
                                    knit provides unmatched comfrot with each water. Featuring a taped neck and shoulder,
                                    and seamless double-needle collaw, and availble in a range of colors. It offers all in the ultimate head
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="featured_section mt-5 pt-5">
                <div class="container">
                    <div class="text-center">
                        <h1><b>Featured Products</b></h1>
                        <p>Summer Collection New Morden Design</p>
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
                                        <i class="fa fa-shopping-cart mx-3"></i>
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
                                        <i class="fa fa-shopping-cart mx-3"></i>
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
                                        <i class="fa fa-shopping-cart mx-3"></i>
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
                                        <i class="fa fa-shopping-cart mx-3"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        )
};

export default ProductDetails;
