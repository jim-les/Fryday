import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const products = [
    {
        id: 1,
        name: 'Smart Screen LED TV',
        description: 'This is the description of Product 1.',
        Price : '$170.00'
    },
    {
        id: 2,
        name: 'White Men Shoes',
        description: 'This is the description of Product 2.',
        Price: "$84.50",
    },
    // Add more products as needed
];

const Home = () => {
  return (
      <div>
          <div className="container">
              <div className="row">
                  <div className="col-lg-3">
                      <ul className="productsCategories list-group">
                          <li className="productItem list-group-item">
                              <a href="">Beauty</a>
                          </li>
                          <li class="productItem list-group-item">
                              <a href="">Electronics</a>
                          </li>
                          <li class="productItem list-group-item">
                              <a href="">Woman's Fashon</a>
                          </li>
                          <li class="productItem list-group-item">
                              <a href="">Men's Fashon</a>
                          </li>
                          <li class="productItem list-group-item">
                              <a href="">Home & Kitchen</a>
                          </li>
                          <li class="productItem list-group-item">
                              < a href="" > Health and Households</a >
                          </li >
                          <li class="productItem list-group-item">
                              < a href="" > Sports</a >
                          </li >
                          <li class="productItem list-group-item">
                              < a href="" > Best seller</a >
                          </li >
                      </ul >
                  </div >
                  <div class="col-lg-8">
                      <div class="carousel">
                          <div class="carousel_info_section">
                              <button class="btn carousel_btn_1">Electronics</button>
                              <p >
                                  <span class="carousel_info_1">Come and Get it!</span>
                                  <br />
                                  <span class="carousel_info_2">BRAND NEW SHOES</span>
                              </p>
                              <button class="btn carousel_btn_2">Shop Now</button>
                          </div>
                      </div>
                  </div>
              </div >
          </div >

          <div class="container mt-4 carouselDiv">
              <div>
                  <p className="trendingProducts">Trending Products</p>
                  <hr />
              </div>

              <div className="row">
                  <div className="col-lg-3">
                      <div class="text-center">
                          <h2 className="getYourToday">Get Yours Today</h2>
                          <div className="d-flex justify-content-center">
                              <div className="day_div time_div">0</div>
                              <div className="hour_div time_div">7</div>
                              <div className="min_div time_div">30</div>
                              <div className="sec_div time_div">10</div>
                          </div>
                          <h4 className="FlasSale">
                              Flash
                              <i className="fa fa-gift text-center giftBox"></i>
                              Sales
                          </h4>

                      </div>
                  </div>
                  <div className="col-lg-3">
                      <div className="product d-flex w-100" >
                          <div className="product-image w-50">
                              <img src="samsung.jpg" alt="" />
                          </div>
                          <div className="product-info">
                              <p className="product_name">
                                  Smart LG TV with wifi & bluetooth.
                              </p>
                              <div className="product_rating d-flex">
                                  <div className="p-0">
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                  </div>
                                  <p className="mt-1 mx-2"><small>(2.24)</small></p>
                              </div>
                              <div className="product_price_div d-flex">
                                  <p className="product_price mx-2">$120.30</p>
                                  <p className="product_previous_price"><small><i>$190.70</i></small></p>
                              </div>
                              <a href="" className="product_order_btn btn">Add To Cart</a>
                          </div>
                      </div>
                  </div>

                  <div className="col-lg-3">
                      <div className="product d-flex w-100" >
                          <div className="product-image w-50">
                              <img src="carousel_1.jpg" alt="" />
                          </div>
                          <div className="product-info">
                              <p className="product_name">
                                  Smart LG TV with wifi & bluetooth.
                              </p>
                              <div className="product_rating d-flex">
                                  <div className="p-0">
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                  </div>
                                  <p className="mt-1 mx-2"><small>(2.24)</small></p>
                              </div>
                              <div className="product_price_div d-flex">
                                  <p className="product_price mx-2">$120.30</p>
                                  <p className="product_previous_price"><small><i>$190.70</i></small></p>
                              </div>
                              <a href="" className="product_order_btn btn">Add To Cart</a>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3">
                      <div className="product d-flex w-100" >
                          <div className="product-image w-50">
                              <img src="carousel_1.jpg" alt="" />
                          </div>
                          <div className="product-info">
                              <p className="product_name">
                                  Smart LG TV with wifi & bluetooth.
                              </p>
                              <div className="product_rating d-flex">
                                  <div className="p-0">
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                  </div>
                                  <p className="mt-1 mx-2"><small>(2.24)</small></p>
                              </div>
                              <div className="product_price_div d-flex">
                                  <p className="product_price mx-2">$120.30</p>
                                  <p className="product_previous_price"><small><i>$190.70</i></small></p>
                              </div>
                              <a href="" className="product_order_btn btn">Add To Cart</a>
                          </div>
                      </div>
                  </div>

              </div>

              <hr />


          </div>

          <div className="container">
              <h1>Our Products</h1>
              <div className="row">
                  
                  <div className="col-lg-10">
                      <div className="row">

                          {products.map((product) => (
                          <div className="col-lg-4 my-5">
                              <div className="product d-flex w-100" key={product.id}>
                                  <div className="product-image w-50">
                                      <img src="carousel_1.jpg" alt="" />
                                  </div>
                                  <div className="product-info">
                                      <p className="product_name">
                                              {product.name }
                                      </p>
                                      <div className="product_rating d-flex">
                                          <div className="p-0">
                                              <i className="fa fa-star"></i>
                                              <i className="fa fa-star"></i>
                                              <i className="fa fa-star"></i>
                                              <i className="fa fa-star"></i>
                                              <i className="fa fa-star"></i>
                                          </div>
                                          <p className="mt-1 mx-2">(2.24)</p>
                                      </div>
                                      <div className="product_price_div d-flex">
                                              <p className="product_price mx-2">{product.Price}</p>
                                          <p className="product_previous_price"><small><i>$190.70</i></small></p>
                                      </div>
                                          <a href="" >
                                              <Link className="product_order_btn btn" to={`/product/${product.id}`}>Add to Cart</Link>
                                          </a>
                                  </div>
                              </div>
                          </div>
                          ))}
                      </div>
                  </div>
                  <div className="col-lg-2">
                      <div className="filerDiv">
                          <form action="">
                              <label for="">Price: </label><br />
                              <div>
                                  <input type="radio" name="priceType" id="HighestToLowest" />
                                  <label>Highest To Lowest</label>
                              </div>
                              <div>
                                  <input type="radio" name="priceType" id="LowestToHighest" />
                                  <label>Lowest To Highest</label>
                              </div>
                              <br />
                              <div className="d-flex justify-content-between">
                                  <p className="min_price_label">0</p>
                                  <p className="max_pice_label">10,000</p>
                              </div>
                              <input type="range" name="price_range" id="priec_range" min="0" max="100" />
                              <br /><br />
                              <div>
                                  <label for="">Category:</label>
                                  <br />
                                  <div>
                                      <input type="checkbox" name="category" id="television" />
                                      <label for="">Television</label>
                                  </div>
                                  <div>
                                      <input type="checkbox" name="category" id="Console" />
                                      <label for="">Console</label>
                                  </div>
                                  <div>
                                      <input type="checkbox" name="category" id="CellPhone" />
                                      <label for="">Cell Phone</label>
                                  </div>

                                  <div>
                                      <input type="submit" value="APPLY" className="btn applyFilterBtn" />
                                  </div>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>

          </div>

      </div>
  );
};

export default Home;
