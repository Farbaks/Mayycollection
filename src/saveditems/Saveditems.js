import React from 'react';
import Header from '../template/Header';
import Footer from '../template/Footer';
import '../assets/style/Saveditems.css';

function Saveditems() {
    
    document.getElementById("title").innerHTML="Saved Items - Mayy Collection";
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
                <div className="cart">
                    <p className="cart-heading">Saved items</p>
                    <div className="saved-item">
                        <div className="saved-items-container-2">
                            <div className="sort">
                                <div className="sort-container">
                                    
                                    <select>
                                        <option>Sort by</option>
                                        <option>New to Old</option>
                                        <option>Old to New</option>
                                        <option>Price Low to High</option>
                                        <option>Price High to Low</option>
                                    </select>
                                    <p>45 Items</p>
                                </div>
                            </div>
                            <div className="saved-items-list">
                                <div className="saved-items-card">
                                    <div className="saved-items-card-image">
                                        <a href="">
                                            <img src={process.env.PUBLIC_URL+'/images/shoe3.jpg'} alt="shoe2" />
                                        </a>
                                        <div className="product-action">
                                            <img src={process.env.PUBLIC_URL+'/images/delete.svg'} alt="delete" />
                                        </div>
                                    </div>
                                    <a href="" className="saved-items-card-name">
                                        ASOS DESIGN regular stripe shirt in navy and brown
                                    </a>
                                    <div className="saved-items-card-price">
                                        <p className="sale-price">₦4,000</p>
                                        <p className="normal-price">₦5,900</p>
                                    </div>
                                </div>
                                <div className="saved-items-card">
                                    <div className="saved-items-card-image">
                                        <a href="">
                                            <img src={process.env.PUBLIC_URL+'/images/shoe2.jpg'} alt="shoe2" />
                                        </a>
                                        <div className="product-action">
                                            <img src={process.env.PUBLIC_URL+'/images/delete.svg'} alt="delete" />
                                        </div>
                                    </div>
                                    <a href="" className="saved-items-card-name">
                                        ASOS DESIGN regular stripe shirt in navy and brown
                                    </a>
                                    <div className="saved-items-card-price">
                                        <p className="sale-price">₦14,000</p>
                                        <p className="normal-price">₦25,900</p>
                                    </div>
                                </div>
                                <div className="saved-items-card">
                                    <div className="saved-items-card-image">
                                        <a href="">
                                            <img src={process.env.PUBLIC_URL+'/images/shirt3.jpg'} alt="shoe2" />
                                        </a>
                                        <div className="product-action">
                                            <img src={process.env.PUBLIC_URL+'/images/delete.svg'} alt="delete" />
                                        </div>
                                    </div>
                                    <a href="" className="saved-items-card-name">
                                        ASOS DESIGN regular stripe shirt in navy and brown
                                    </a>
                                    <div className="saved-items-card-price">
                                        <p className="sale-price">₦4,000</p>
                                        <p className="normal-price">₦5,500</p>
                                    </div>
                                </div>
                                <div className="saved-items-card">
                                    <div className="saved-items-card-image">
                                        <a href="">
                                            <img src={process.env.PUBLIC_URL+'/images/shirt21.jpg'} alt="shoe2" />
                                        </a>
                                        <div className="product-action">
                                            <img src={process.env.PUBLIC_URL+'/images/delete.svg'} alt="delete" />
                                        </div>
                                    </div>
                                    <a href="" className="saved-items-card-name">
                                        ASOS DESIGN regular stripe shirt in navy and brown
                                    </a>
                                    <div className="saved-items-card-price">
                                        <p className="sale-price">₦43,000</p>
                                        <p className="normal-price">₦55,900</p>
                                    </div>
                                </div>
                                <div className="saved-items-card">
                                    <div className="saved-items-card-image">
                                        <a href="">
                                            <img src={process.env.PUBLIC_URL+'/images/shirt4.jpg'} alt="shoe2" />
                                        </a>
                                        <div className="product-action">
                                            <img src={process.env.PUBLIC_URL+'/images/delete.svg'} alt="delete" />
                                        </div>
                                    </div>
                                    <a href="" className="saved-items-card-name">
                                        ASOS DESIGN regular stripe shirt in navy and brown
                                    </a>
                                    <div className="saved-items-card-price">
                                        <p className="sale-price">₦3,400</p>
                                        <p className="normal-price">₦5,900</p>
                                    </div>
                                </div>
                                <div className="saved-items-card">
                                    <div className="saved-items-card-image">
                                        <a href="">
                                            <img src={process.env.PUBLIC_URL+'/images/shirt20.jpg'} alt="shoe2" />
                                        </a>
                                        <div className="product-action">
                                            <img src={process.env.PUBLIC_URL+'/images/delete.svg'} alt="delete" />
                                        </div>
                                    </div>
                                    <a href="" className="saved-items-card-name">
                                        ASOS DESIGN regular stripe shirt in navy and brown
                                    </a>
                                    <div className="saved-items-card-price">
                                        <p className="sale-price">₦2,500</p>
                                        <p className="normal-price">₦4,900</p>
                                    </div>
                                </div>
                                <div className="saved-items-card">
                                    <div className="saved-items-card-image">
                                        <a href="">
                                            <img src={process.env.PUBLIC_URL+'/images/shoe4.jpg'} alt="shoe2" />
                                        </a>
                                        <div className="product-action">
                                            <img src={process.env.PUBLIC_URL+'/images/delete.svg'} alt="delete" />
                                        </div>
                                    </div>
                                    <a href="" className="saved-items-card-name">
                                        ASOS DESIGN regular stripe shirt in navy and brown
                                    </a>
                                    <div className="saved-items-card-price">
                                        <p className="sale-price">₦16,500</p>
                                        <p className="normal-price">₦25,900</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
           </div>
        <Footer/>
    </div>
  );
}

export default Saveditems;
