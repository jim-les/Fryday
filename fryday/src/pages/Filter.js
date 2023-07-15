import React from 'react';



const Filter = () => {
    return (
        <div className="container">
            <div className="productDetails d-flex my-3">
                <div className="product-image w-50">
                    <img src="carousel_1.jpg" alt="" />
                </div>
                <div className="product-info">
                    <p className="product_name">
                        Smart LG TV with wifi & bluetooth.
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
                    <div className="product_price_div d-flex">
                        <p className="product_price mx-2">$120.30</p>
                        <p className="product_previous_price"><small><i>$190.70</i></small></p>
                    </div>
                    <a href="" className="product_order_btn btn">Add To Cart</a>
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

export default Filter;
