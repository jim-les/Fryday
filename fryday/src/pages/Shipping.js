import React from 'react';


const Shipping = () => {
    return (
        <div className="container shippingPage">
            <div className="row">
                <div className="col-lg-6">
                    <div className="card mt-3">
                        <div className="card-body shippingForm">
                            <div className="my-2">
                                <h2>Shipping Adress</h2>
                            </div>

                            <div className="my-2">
                                <label for="">Email Address</label>
                                <br />
                                <input type="email" className="form-field" />
                            </div>

                            <div className="my-2">
                                <label for="">First Name</label>
                                <br />
                                <input type="text" className="form-field" />
                            </div>

                            <div className="my-2">
                                <label for="">Last Name</label>
                                <br />
                                <input type="text" className="form-field" />
                            </div>

                            <div>
                                <label for="">Company Name</label>
                                <br />
                                <input type="text" className="form-field" />

                            </div>

                            <div className="my-2">
                                <label for="">Address</label>
                                <br />
                                <input className="mt-1" type="text" className="form-field" />
                            </div>

                            <div className="my-2">
                                <label for="">Country</label>
                                <input type="text" className="form-field" />
                            </div>

                            <div>
                                <p className="shippingMethod">Shipping Method</p>
                                <input type="checkbox" name="" id="" />
                                    <label for="">$5.00 Flat Rate</label>
                            </div>



                            <div>
                                <input type="submit" value="Place Order" className="placeOrderBtn mt-2"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-5">
                    <div className="card mt-5">
                        <div className="card-body">
                            <div>
                                <p className="font-weight-8">Order Summary</p>
                            </div>

                            <div className="my-2 justify-content-between">
                                <div className="d-flex justify-content-between">
                                    <p className="font-size-6">Subtotal</p>
                                    <p className="font-size-6">356.95</p>
                                </div>

                                <div className="d-flex justify-content-between">
                                    <p className="font-size-6">Discount</p>
                                    <p className="font-size-6">-$100.00</p>
                                </div>

                                <div className="d-flex justify-content-between">
                                    <p className="font-size-6">Shipping Fee</p>
                                    <p className="font-size-6">$10.00</p>
                                </div>

                                <div className="d-flex justify-content-between">
                                    <p className="font-size-6">Total</p>
                                    <h3>265.95</h3>
                                </div>

                            </div>

                            <hr />
                                <div className="d-flex">
                                    <div>
                                        <img src="carousel_1.jpg" alt="" />
                                    </div>

                                    <div>
                                        <p>
                                            <span>
                                            Men's Fashion T Shirt
                                            </span> <br />
                                            <span>
                                                <i>$170.00</i>
                                            </span> <br />
                                            <span>
                                                <b>&times;1</b>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
};

export default Shipping;
