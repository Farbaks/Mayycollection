import React from 'react';
import Header from '../template/Header';
import Footer from '../template/Footer';
import {Fade} from 'react-slideshow-image';
import {Slide} from 'react-slideshow-image';
import { Carousel } from 'antd';
// import logo from './logo.svg';
import '../assets/style/Product.css';
import 'antd/es/carousel/style/index.css';



function Product() {
    document.getElementById("title").innerHTML="Products - Mayy Collection";
    const properties = {
        duration: 5000,
        transitionDuration: 500,
        infinite:true,
        arrows:true,
        onChange:(oldIndex, newIndex) => {
            // console.log(`slide transition from ${oldIndex} to ${newIndex}`);
        }
    }
  
  
    return (
    
    <div>
        <Header/>
            <div className="content">
                <div className="section1">
                    <div className="product-image">
                        {/* <Slide {...properties}>
                            <div className="product-image-container">
                                <img src={process.env.PUBLIC_URL+'/images/bag.jpg'} alt="shirt" />
                            </div>
                            <div className="product-image-container">
                                <img src={process.env.PUBLIC_URL+'/images/shirt21.jpg'} alt="shirt" />
                            </div>
                            <div className="product-image-container">
                                <img src={process.env.PUBLIC_URL+'/images/shirt22.jpg'} alt="shirt" />
                            </div>
                        </Slide> */}
                        <Carousel autoplay>
                            <div className="product-image-container">
                                <img src={process.env.PUBLIC_URL+'/images/bag.jpg'} alt="shirt" />
                            </div>
                            <div className="product-image-container">
                                <img src={process.env.PUBLIC_URL+'/images/shirt21.jpg'} alt="shirt" />
                            </div>
                            <div className="product-image-container">
                                <img src={process.env.PUBLIC_URL+'/images/shirt22.jpg'} alt="shirt" />
                            </div>
                        </Carousel>
                    </div>
                    <div className="product-det">
                        <div className="product-name">ASOS DESIGN "Eat, Sleep, Drink" casual shirt</div>
                        <div className="property"><span className="instock">In Stock</span><span className="outofstock"></span></div>
                        <div className="section-3-card-price">
                            <p className="sale-price">₦4500</p>
                            <p className="normal-price">₦5900</p>
                        </div>
                        <div className="property"><span className="bold">COLOR: </span><span className="light">Black</span></div>
                        <div className="property"><span className="bold">SIZE: </span><span className="light">L</span></div>
                        <div className="property">
                            <span className="bold">QUANTITY: </span>
                            <input type="number" defaultValue="1" />
                        </div>
                        <div className="add-to-collection">
                            
                            <button>ADD TO BAG</button>
                            <div className="wishlist">
                                <img src={process.env.PUBLIC_URL+'/images/saveditem.png'} alt="shirt" />
                            </div>
                        </div>
                        <div className="product-description">
                            <p className="product-description-title">PRODUCT DESCRIPTION</p>
                            <p className="description-text">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Nostrum eligendi, non dolorem tenetur reiciendis placeat consectetur 
                            totam quis natus ipsa cupiditate quasi. Autem consectetur 
                            ratione itaque aspernatur. Expedita, quo illum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Nostrum eligendi, non dolorem tenetur reiciendis placeat consectetur 
                            totam quis natus ipsa cupiditate quasi. 
                            </p>
                        </div>
                    </div>
                    
                </div>
                <div className="section-3">
                <p className="section-3-title">Related Products</p>
                <div className="content-heading-line">
                    <div className="line"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="line"></div>
                </div>
                <div className="section-3-container">
                    <a href="#" className="section-3-card">
                        <div className="section-3-card-image">
                            <img src={process.env.PUBLIC_URL+'/images/shoe3.jpg'} alt="shoe2" />
                        </div>
                        <p className="section-3-card-name">
                            ASOS DESIGN regular stripe shirt in navy and brown
                        </p>
                        <div className="section-3-card-price">
                            <p className="sale-price">₦4000</p>
                            <p className="normal-price">₦5900</p>
                        </div>
                    </a>
                    <a href="#" className="section-3-card">
                        <div className="section-3-card-image">
                            <img src={process.env.PUBLIC_URL+'/images/shoe2.jpg'} alt="shoe2" />
                        </div>
                        <p className="section-3-card-name">
                            ASOS DESIGN regular pattern shirt in navy and brown
                        </p>
                        <div className="section-3-card-price">
                            <p className="sale-price">₦3200</p>
                            <p className="normal-price">₦6900</p>
                        </div>
                    </a>
                    <a href="#" className="section-3-card">
                        <div className="section-3-card-image">
                            <img src={process.env.PUBLIC_URL+'/images/shirt5.jpg'} alt="shoe2" />
                        </div>
                        <p className="section-3-card-name">
                            Sky blue polo shirt
                        </p>
                        <div className="section-3-card-price">
                            <p className="sale-price">₦4500</p>
                            <p className="normal-price">₦5900</p>
                        </div>
                    </a>
                    <a href="#" className="section-3-card">
                        <div className="section-3-card-image">
                            <img src={process.env.PUBLIC_URL+'/images/cap1.jpg'} alt="shoe2" />
                        </div>
                        <p className="section-3-card-name">
                            AZTECH AZ baseball cap in pink 
                        </p>
                        <div className="section-3-card-price">
                            <p className="sale-price">₦4500</p>
                            <p className="normal-price">₦5900</p>
                        </div>
                    </a>
                    
                </div>
            </div>

            </div>
        
        <Footer/>
    </div>
  );
}

export default Product;
