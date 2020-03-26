import React from 'react';
import Header from '../template/Header';
import Footer from '../template/Footer';
import '../assets/style/Customorder.css';

function Customorder() {
    
    document.getElementById("title").innerHTML="Place custom order - Mayy Collection";
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
                <div className="placeorder-container-1">
                    <div className="left-side">
                        <div className="custom-image">
                            <img src={process.env.PUBLIC_URL+'/images/customorder.svg'} alt="customorder" />
                        </div>
                    </div>
                    <div className="right-side">
                        <h4>Are you in need of a personal shopper ? Or you just can`t find what you`re searching for ?</h4>
                        <h1>Just place a <span className="blue">custom order</span> below and let us help!</h1>
                    </div>
                </div>
                <div className="placeorder-container-2">
                    <div className="placeorder-form">
                        <p className="placeorder-heading">Custom Order</p>
                        <p className="placeorder-subheading">Contact Details</p>     
                        <div className="fullwidth flex-row">
                            
                            <div className="halfwidth flex-row">
                                <label>First name</label>
                                <input type="text"/>
                            </div>
                            <div className="halfwidth flex-row">
                                <label>Last name</label>
                                <input type="text"/>
                            </div>
                        </div>
                        <div className="fullwidth flex-row">
                            <div className="halfwidth flex-row">
                                <label>Email</label>
                                <input type="email"/>
                            </div>
                            <div className="halfwidth flex-row">
                                <label>Phone number</label>
                                <input type="text"/>
                            </div>
                        </div>
                        <div className="new-customorder">
                            <p className="placeorder-subheading">Add a new item</p>
                            <div className="fullwidth flex-row">
                                <label>Item name</label>
                                <input type="text"/>
                            </div>
                            
                            <div className="fullwidth flex-row">
                                <div className="onethirdwidth flex-row">
                                    <label> Item category</label>
                                    <input type="text"/>
                                </div>
                                <div className="onethirdwidth flex-row">
                                    <label>Item color</label>
                                    <input type="text"/>
                                </div>
                                <div className="onethirdwidth flex-row">
                                    <label>Quantity</label>
                                    <input type="number"/>
                                </div>
                            </div>
                            <div className="fullwidth flex-row">
                                <label> Link to Item (Optional)</label>
                                <input type="text"/>
                            </div>
                            <button className="fullwidth">Add Item</button>
                        </div>
                        <div className="customorder-div">
                            <p className="placeorder-subheading">Items List</p>
                            <p className="no-customorder">No items have been added yet...</p>
                            <div className="customorder-list">
                                <div className="customorder-item">
                                    <p>1</p>
                                    <div className="customorder-item-rightside">
                                        <div className="customorder-detail">
                                            <div className="customorder-detail-top">
                                                Green Casual Dad T-Shirt
                                            </div>  
                                            <div className="customorder-detail-bottom">
                                                <span>Blue</span><span> x4</span>
                                            </div>
                                        </div>
                                        <div className="customorder-delete">
                                            <img src={process.env.PUBLIC_URL+'/images/delete.svg'} alt="customorder" />
                                        </div>
                                    </div>
                                </div>
                                <div className="customorder-item">
                                    <p>2</p>
                                    <div className="customorder-item-rightside">
                                        <div className="customorder-detail">
                                            <div className="customorder-detail-top">
                                                Nike Bennassi Slide
                                            </div>  
                                            <div className="customorder-detail-bottom">
                                                <span>Blue Camo</span><span> x1</span>
                                            </div>
                                        </div>
                                        <div className="customorder-delete">
                                            <img src={process.env.PUBLIC_URL+'/images/delete.svg'} alt="customorder" />
                                        </div>
                                    </div>
                                </div>
                                <div className="customorder-item">
                                    <p>3</p>
                                    <div className="customorder-item-rightside">
                                        <div className="customorder-detail">
                                            <div className="customorder-detail-top">
                                                Slazenger Polo
                                            </div>  
                                            <div className="customorder-detail-bottom">
                                                <span>Light Pink</span><span> x1</span>
                                            </div>
                                        </div>
                                        <div className="customorder-delete">
                                            <img src={process.env.PUBLIC_URL+'/images/delete.svg'} alt="customorder" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="fullwidth">Request Quote</button>
                        </div>
                    </div>
                </div>
            </div>
        <Footer/>
    </div>
  );
}

export default Customorder;
