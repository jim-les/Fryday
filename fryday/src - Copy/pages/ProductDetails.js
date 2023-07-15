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
        <div className="container productDetailsDiv">
            <div className="productDetails d-flex my-2">
                <div className="product-image w-50">
                    <img src="carousel_1.jpg" alt="product Img" />

                </div>
                <div className="product-info">
                    <p className="product_name">
                        {product.name}
                    </p>
                    <div class="product_rating d-flex">
                        <div class="p-0">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <p className="mt-1 mx-2">(2.24)</p>
                    </div>
                    <div class="Inches  my-4">
                        <span>Chooce Inches</span>
                        <div class="d-flex my-0">
                            <div class="24inches mx-1"><b>24"</b></div>
                            <div class="32inches mx-1"><b>32"</b></div>
                            <div class="42inches mx-1"><b>42"</b></div>
                            <div class="48inches mx-1"><b>48"</b></div>
                        </div>

                    </div>
                    <div class="product_price_div d-flex">
                        <p class="product_price mx-2">{product.Price}</p>
                        <p class="product_previous_price"><small><i>$190.70</i></small></p>
                    </div>

                    <div class="d-flex">
                        <div class="d-flex mx-3">
                            <span className="cartAdditon">-</span>
                            <input className="cartProductDetailsTotal" type="text" class="form-field" value="1" />
                            <span className="cartSubtraction">+</span>
                        </div>
                        <a href="" class="product_order_btn btn">Add To Cart</a>
                    </div>

                </div>

            </div>
            <hr />
            <div className="row">
                <div className="col-lg-2">
                    <div className="card alternativeProducts">
                        <div className="card-body">
                            Extra products
                        </div>
                    </div>
                </div>

            </div>
            <hr />
            <div className="product_details">
                <div className="product_description_info">
                    This products is the best with the best features that you could ever find. This has in bult speackers
                    ,Wifi , bluetooth, Charger, Free gifts, 3d led screen and many more.
                </div>

                <hr />

                <div>
                    <ul className="list-group">
                        <li className="list-group-item Description">
                            Description
                        </li>
                        <li className="list-group-item bg-dark text-light">
                            Bluetooth - version 3.1
                        </li>
                        <li className="list-group-item bg-dark text-light">
                            Screen - 3D Layered
                        </li>
                        <li className="list-group-item bg-dark text-light">
                            Processor - Octacor
                        </li>
                        <li className="list-group-item bg-dark text-light">
                            front Comera - 12mp
                        </li>
                        <li className="list-group-item bg-dark text-light">
                            Back Comera - 54mp
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        )
};

export default ProductDetails;
