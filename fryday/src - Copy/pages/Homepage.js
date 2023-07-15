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
            <section class="carosel_section">
                <div class="container-fluid">
                    <div class="carousels_group">
                        <div class="carousel_1">
                            <div class="carousel_controls">
                                <i class="fa fa-angle-left"></i>
                                <i class="fa fa-angle-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="aftersales_service position-relative my-2">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="d-flex">
                                <div class="card px-4">
                                    <img src="" alt="Image" />
                                </div>

                                <div>
                                    <h3>FREE SHIPPING</h3>
                                    <p>On Orders Above Rs 1000</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="d-flex">
                                <div class="card px-4">
                                    <img src="" alt="Image" />
                                </div>

                                <div>
                                    <h3>FREE STRINGING</h3>
                                    <p>On Recquets Above Rs 5000</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="d-flex">
                                <div class="card px-4">
                                    <img src="" alt="Image" />
                                </div>

                                <div>
                                    <h3 id="blinking_after_sales_service">NO COST EMI</h3>
                                    <p>On Orders Above Rs 1000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="selling_section_page mt-5">
                <div class="container">
                    <div class="text-center d-flex justify-content-between">
                        <p></p>
                        <p id="product_section_title">Best Sellers</p>
                        <div>
                            <i class="fa fa-angle-left bestSellerControlls"></i>
                            <i class="fa fa-angle-right bestSellerControlls"></i>
                        </div>
                    </div>

                    <div class="product_list_div">
                        {products.map((product) => (
                            <Link key={product.id} to={'/product/1'}>
                                <div class="product_item" >
                                    <div class="p-2">
                                        <p class="bestSeller">Best Seller</p>
                                        <div class="product_image_div d-flex justify-content-center">
                                            <img src="./bluetooth.jpg" alt="" class="product_image" />
                                        </div>

                                        <div class="product_details">
                                            <p>{product.name}</p>
                                        </div>

                                        <div class="product_price_div d-flex">
                                            <p class="current_price mx-1"><b>{product.Price}</b></p>
                                            <p class="previous_price mx-1"><b>{product.previous_price}</b></p>

                                            <div class="mx-1">
                                                <p class="percentageOff"><b>43%OFF</b></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>

            </section>

            <section class="warraanty_section mt-5">
                <div class="container-fluid">
                    <div class="d-flex">
                        <div class="mx-0">
                            <img src="carousel_1.jpg" alt="" class="w-100" height="200px" />
                        </div>
                        <div class="mx-0">
                            <img src="Images/warranty/bh-new-price-match.jpg" alt="" class="w-100" height="200px" />
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <img src="Images/after_warrant_section/BH-Rackets_1.jpg" alt="" class="shops w-100 m-1" />
                        </div>
                        <div class="col-lg-6">
                            <img src="Images/after_warrant_section/BH-Adidasshoes.jpg" alt="" class="shops w-100 m-1" />
                        </div>
                        <div class="col-lg-6">
                            <img src="Images/after_warrant_section/BH-Bags.jpg" alt="" class="shops w-100 m-1" />
                        </div>
                        <div class="col-lg-6">
                            <img src="Images/after_warrant_section/Grips.jpg" alt="" class="shops w-100 m-1" />
                        </div>
                    </div>
                </div>
            </section>

            <section class="why_choose_us mt-5">
                <div class="container">
                    <div class="text-center">
                        <p class="whychooseus_Title">Why Choose Quadric ?</p>
                    </div>
                    <div class="row">
                        <div class="col-lg-2">
                            <div class="card">
                                <div class="card-body">
                                    <div class="d-flex justify-content-center align-items-center">
                                        <div>
                                            <img src="https://badmintonhub.in/media/porto/images/bh-rupee-new.svg" class="whyChooseUs_Image" />
                                            <p class="why_choose_us_reasons">LOWEST PRICE</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2">
                            <div class="card">
                                <div class="card-body">
                                    <div class="d-flex justify-content-center align-items-center">
                                        <div>
                                            <img src="https://badmintonhub.in/media/porto/images/bh-rupee-new.svg" class="whyChooseUs_Image" />
                                            <p class="why_choose_us_reasons">GENUINE PRODUCTS</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2">
                            <div class="card">
                                <div class="card-body">
                                    <div class="d-flex justify-content-center align-items-center">
                                        <div>
                                            <img src="https://badmintonhub.in/media/porto/images/bh-rupee-new.svg" class="whyChooseUs_Image" />
                                            <p class="why_choose_us_reasons">FAST DELIVERY</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2">
                            <div class="card">
                                <div class="card-body">
                                    <div class="d-flex justify-content-center align-items-center">
                                        <div>
                                            <img src="https://badmintonhub.in/media/porto/images/bh-rupee-new.svg" class="whyChooseUs_Image" />
                                            <p class="why_choose_us_reasons">EARN RETURN</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2">
                            <div class="card">
                                <div class="card-body">
                                    <div class="d-flex justify-content-center align-items-center">
                                        <div>
                                            <img src="https://badmintonhub.in/media/porto/images/bh-rupee-new.svg" class="whyChooseUs_Image" />
                                            <p class="why_choose_us_reasons">NO DROP SHIPPING</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2">
                            <div class="card">
                                <div class="card-body">
                                    <div class="d-flex justify-content-center align-items-center">
                                        <div>
                                            <img src="https://badmintonhub.in/media/porto/images/bh-rupee-new.svg" class="whyChooseUs_Image" />
                                            <p class="why_choose_us_reasons">WARRANTY</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="New_Arrivals_Section mt-5 px-5">
                <div class="container pb-5">
                    <div class="text-center d-flex justify-content-between py-3">
                        <p></p>
                        <p id="product_section_title">New Arrivals</p>
                        <div>
                            <i class="fa fa-angle-left bestSellerControlls"></i>
                            <i class="fa fa-angle-right bestSellerControlls"></i>
                        </div>
                    </div>

                    <div class="new_arrivals_list  d-flex justify-content-around">

                        <div class="new_arrival_items">
                            <div class="image_div">
                                <img src="Images/New arrivals/yonex-ac128-ex-excel-pro-replacement-grip-white.jpg" alt="" class="new_arrival_image" />
                            </div>

                            <div class="new_arrival_item_info text-center">
                                <p>YONEX Z FORCE II</p>
                            </div>

                            <div class="new_arrivals_price_info d-flex justify-content-around">
                                <p class="new_arrival_initial_price"><b>$810</b></p>
                                <p class="new_arrival_previous_price" ><b>$1000</b></p>

                                <div class="px-1" class="new_arrival_percentage_off_div">
                                    <p class="percentageOff"><b>35%OFF</b></p>
                                </div>
                            </div>
                        </div>
                        <div class="new_arrival_items">
                            <div class="image_div">
                                <img src="Images/New arrivals/yonex-ac128-ex-excel-pro-replacement-grip-white.jpg" alt="" class="new_arrival_image" />
                            </div>

                            <div class="new_arrival_item_info text-center">
                                <p>YONEX Z FORCE II</p>
                            </div>

                            <div class="new_arrivals_price_info d-flex justify-content-around">
                                <p class="new_arrival_initial_price"><b>$810</b></p>
                                <p class="new_arrival_previous_price" ><b>$1000</b></p>

                                <div class="px-1" class="new_arrival_percentage_off_div">
                                    <p class="percentageOff"><b>35%OFF</b></p>
                                </div>
                            </div>
                        </div>
                        <div class="new_arrival_items">
                            <div class="image_div">
                                <img src="Images/New arrivals/yonex-ac128-ex-excel-pro-replacement-grip-white.jpg" alt="" class="new_arrival_image" />
                            </div>

                            <div class="new_arrival_item_info text-center">
                                <p>YONEX Z FORCE II</p>
                            </div>

                            <div class="new_arrivals_price_info d-flex justify-content-around">
                                <p class="new_arrival_initial_price"><b>$810</b></p>
                                <p class="new_arrival_previous_price" ><b>$1000</b></p>

                                <div class="px-1" class="new_arrival_percentage_off_div">
                                    <p class="percentageOff"><b>35%OFF</b></p>
                                </div>
                            </div>
                        </div>
                        <div class="new_arrival_items">
                            <div class="image_div">
                                <img src="Images/New arrivals/yonex-ac128-ex-excel-pro-replacement-grip-white.jpg" alt="" class="new_arrival_image" />
                            </div>

                            <div class="new_arrival_item_info text-center">
                                <p>YONEX Z FORCE II</p>
                            </div>

                            <div class="new_arrivals_price_info d-flex justify-content-around">
                                <p class="new_arrival_initial_price"><b>$810</b></p>
                                <p class="new_arrival_previous_price" ><b>$1000</b></p>

                                <div class="px-1" class="new_arrival_percentage_off_div">
                                    <p class="percentageOff"><b>35%OFF</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer class="bg-dark">
                <div class="container">
                    <div class="row">
                        <div class="col-4">
                            <p class="web_footer_links">QUICK LINKS</p>
                            <ul class="quik_links_list">
                                <li class="quick_link_item">Home</li>
                                <li class="quick_link_item">Electronic</li>
                                <li class="quick_link_item">Women</li>
                                <li class="quick_link_item">Kitchen</li>
                                <li class="quick_link_item">Best selling</li>
                                <li class="quick_link_item">New arrivals</li>
                                <li class="quick_link_item">Other</li>
                            </ul>
                        </div>

                        <div class="col-lg-3">
                            <div class="footer_social text-light">
                                <i class="fa fa-facebook"></i>
                            </div>
                        </div>

                        <div class="col-lg-3 my-5">
                            <div class="subscriptions d-flex">
                                <input type="text" class="form-field px-1" placeholder="emails" />
                                <button class="btn bg-danger text-light">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;
