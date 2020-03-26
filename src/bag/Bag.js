import React from 'react';
import Header from '../template/Header';
import Footer from '../template/Footer';
import '../assets/style/Bag.css';

function Bag() {
    
    document.getElementById("title").innerHTML="Shopping Bag - Mayy Collection";
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
                <div className="noitemincart">
                    <div className="noitem-image">
                        <img src={process.env.PUBLIC_URL+'/images/emptycart.svg'} alt="empty cart" />
                    </div>
                    <p>Oh no, your bag is empty. <a href="/">Start shopping!</a></p>
                </div>
                <div className="cart">
                    <p className="cart-heading">Shopping bag</p>
                    <div className="cart-content">
                        <div className="cart-content-1">
                            <div className="cart-item">
                                <div className="cart-image">
                                    <img src={process.env.PUBLIC_URL+'/images/shoe4.jpg'} alt="empty cart" />
                                </div>
                                <div className="cart-detail">
                                    <p className="cart-title">ASOS DESIGN Suede brouges in navy blue</p>
                                    <p className="cart-subtitle"><span className="cart-id">Price:</span><span>₦4000</span></p>
                                    <p className="cart-subtitle"><span className="cart-id">Color:</span><span>Red</span></p>
                                    <p className="cart-subtitle"><span className="cart-id">Size:</span><span>L</span></p>
                                    <p className="cart-subtitle">
                                        <span className="cart-id">Quantity:</span>
                                        <span>
                                            <select>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                                <option>7</option>
                                                <option>8</option>
                                                <option>9</option>
                                                <option>10</option>
                                                <option>11</option>
                                                <option>12</option>
                                                <option>13</option>
                                                <option>14</option>
                                                <option>15</option>
                                                <option>16</option>
                                                <option>17</option>
                                                <option>18</option>
                                                <option>19</option>
                                                <option>20</option>
                                            </select>
                                        </span>
                                    </p>
                                    <p className="cart-subtitle"><span className="cart-id">Sub-total:</span><span>₦4000</span></p>
                                    <button className="cart-icon"><img src={process.env.PUBLIC_URL+'/images/remove.svg'} alt="remove" /></button>
                                </div>
                            </div>
                            <div className="cart-item">
                                <a href="/product/" className="cart-image">
                                    <img src={process.env.PUBLIC_URL+'/images/shirt14.jpg'} alt="empty cart" />
                                </a>
                                <div className="cart-detail">
                                    <a href="/product/" className="cart-title">ASOS DESIGN Suede brouges in navy blue</a>
                                    <p className="cart-subtitle"><span className="cart-id">Price:</span><span>₦4000</span></p>
                                    <p className="cart-subtitle"><span className="cart-id">Color:</span><span>Red</span></p>
                                    <p className="cart-subtitle"><span className="cart-id">Size:</span><span>L</span></p>
                                    <p className="cart-subtitle">
                                        <span className="cart-id">Quantity:</span>
                                        <span>
                                            <select>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                                <option>7</option>
                                                <option>8</option>
                                                <option>9</option>
                                                <option>10</option>
                                                <option>11</option>
                                                <option>12</option>
                                                <option>13</option>
                                                <option>14</option>
                                                <option>15</option>
                                                <option>16</option>
                                                <option>17</option>
                                                <option>18</option>
                                                <option>19</option>
                                                <option>20</option>
                                            </select>
                                        </span>
                                    </p>
                                    <p className="cart-subtitle"><span className="cart-id">Sub-total:</span><span>₦4000</span></p>
                                    <button className="cart-icon"><img src={process.env.PUBLIC_URL+'/images/remove.svg'} alt="remove" /></button>
                                </div>
                            </div>
                            <div className="cart-item">
                                <div className="cart-image">
                                    <img src={process.env.PUBLIC_URL+'/images/shirt4.jpg'} alt="empty cart" />
                                </div>
                                <div className="cart-detail">
                                    <p className="cart-title">ASOS DESIGN Suede brouges in navy blue</p>
                                    <p className="cart-subtitle"><span className="cart-id">Price:</span><span>₦4000</span></p>
                                    <p className="cart-subtitle"><span className="cart-id">Color:</span><span>Red</span></p>
                                    <p className="cart-subtitle"><span className="cart-id">Size:</span><span>L</span></p>
                                    <p className="cart-subtitle">
                                        <span className="cart-id">Quantity:</span>
                                        <span>
                                            <select>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                                <option>7</option>
                                                <option>8</option>
                                                <option>9</option>
                                                <option>10</option>
                                                <option>11</option>
                                                <option>12</option>
                                                <option>13</option>
                                                <option>14</option>
                                                <option>15</option>
                                                <option>16</option>
                                                <option>17</option>
                                                <option>18</option>
                                                <option>19</option>
                                                <option>20</option>
                                            </select>
                                        </span>
                                    </p>
                                    <p className="cart-subtitle"><span className="cart-id">Sub-total:</span><span>₦4000</span></p>
                                    <button className="cart-icon"><img src={process.env.PUBLIC_URL+'/images/remove.svg'} alt="remove" /></button>
                                </div>
                            </div>
                            <div className="cart-item">
                                <div className="cart-image">
                                    <img src={process.env.PUBLIC_URL+'/images/shoe2.jpg'} alt="empty cart" />
                                </div>
                                <div className="cart-detail">
                                    <p className="cart-title">ASOS DESIGN Suede brouges in navy blue</p>
                                    <p className="cart-subtitle"><span className="cart-id">Price:</span><span>₦4000</span></p>
                                    <p className="cart-subtitle"><span className="cart-id">Color:</span><span>Red</span></p>
                                    <p className="cart-subtitle"><span className="cart-id">Size:</span><span>L</span></p>
                                    <p className="cart-subtitle">
                                        <span className="cart-id">Quantity:</span>
                                        <span>
                                            <select>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                                <option>7</option>
                                                <option>8</option>
                                                <option>9</option>
                                                <option>10</option>
                                                <option>11</option>
                                                <option>12</option>
                                                <option>13</option>
                                                <option>14</option>
                                                <option>15</option>
                                                <option>16</option>
                                                <option>17</option>
                                                <option>18</option>
                                                <option>19</option>
                                                <option>20</option>
                                            </select>
                                        </span>
                                    </p>
                                    <p className="cart-subtitle"><span className="cart-id">Sub-total:</span><span>₦4000</span></p>
                                    <button className="cart-icon"><img src={process.env.PUBLIC_URL+'/images/remove.svg'} alt="remove" /></button>
                                </div>
                            </div>

                        </div>
                        <div className="cart-content-2">
                            <p className="cart-subheading">SHOPPING BAG TOTAL</p>
                            <div className="coupon">
                                <p>ADD A COUPON CODE</p>
                                <div className="enter-coupon">
                                    <input type="text" />
                                    <button>ADD</button>
                                </div>
                            </div>
                            <div className="price">
                                <p>Sub total:</p>
                                <p>₦4000</p>
                            </div>
                            <div className="price">
                                <p>Shipping:</p>
                                <p><i>Calculated at checkout</i></p>
                            </div>
                            <br/>
                            <div className="price">
                                <p>Total:</p>
                                <p>₦8000</p>
                            </div>
                            <button className="checkout">PROCEED TO CHECKOUT</button>
                        </div>
                    </div>
                </div>
            </div>
        <Footer/>
    </div>
  );
}

export default Bag;
