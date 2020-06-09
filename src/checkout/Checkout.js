import React from 'react';
import { usePaystackPayment, PaystackButton, PaystackConsumer } from 'react-paystack';
import Header from '../template/Header';
import Footer from '../template/Footer';
import '../assets/style/Bag.css';
import { Steps, Button, message } from 'antd';
import 'antd/es/steps/style/index.css';
import 'antd/es/button/style/index.css';
import 'antd/es/message/style/index.css';
import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';
const { Step } = Steps;


class Checkout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checkouttab: {
                current:0
            },
            config: {
                reference: (new Date()).getTime(),
                email: "user@example.com",
                amount: 20000,
                publicKey: 'pk_test_2982d100f82f1f1329eb22efa2dfca437e064b19',
            }
        };
        document.getElementById("title").innerHTML="Checkout - Mayy Collection";
    } 
    
    goBackward = () => {
        let currentTab = this.state.checkouttab.current - 1;
        this.setState({
            checkouttab: {
                current:currentTab
            }
        });
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    goForward = () => {
        let currentTab = this.state.checkouttab.current + 1;
        this.setState({
            checkouttab: {
                current:currentTab
            }
        });
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    
    config = {
        reference: (new Date()).getTime(),
        email: "user@example.com",
        amount: 20000,
        publicKey: 'pk_test_2982d100f82f1f1329eb22efa2dfca437e064b19',
    }
    Paystack = () => {
        const initializePayment = usePaystackPayment(this.state.config);
        return (
            <div>
                <button onClick={() => {
                    initializePayment()
                }}>Paystack Hooks Implementation</button>
            </div>
        );
    };
    componentProps = {
        ...this.config,
        text: 'Pay for Order',
        onSuccess: () => {
                this.setState({
                    reference: (new Date()).getTime()
                });
                console.log(this.state.payment.reference);
        },
        onClose: () => {
                this.setState({
                    reference: (new Date()).getTime()
            })
        }
    };
    
    render () {
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
                            <p className="cart-heading">Checkout</p>
                            <div className="cart-content">
                                <div className="cart-content-1">
                                    <div className="fullwidth overflow2 margin20">
                                        <Steps current={this.state.checkouttab.current} size="small" labelPlacement="vertical">
                                            <Step title="Order Summary"/>
                                            <Step title="Delivery" />
                                            <Step title="Payment"/>
                                        </Steps>
                                    </div>
                                    {this.state.checkouttab.current === 0 && (
                                        <div>
                                            <div>
                                                <div className="cart-item">
                                                    <div className="cart-image">
                                                        <img src={process.env.PUBLIC_URL+'/images/shoe4.jpg'} alt="empty cart" />
                                                    </div>
                                                    <div className="cart-detail">
                                                        <p className="cart-title">ASOS DESIGN Suede brouges in navy blue</p>
                                                        <p className="cart-subtitle"><span className="cart-id">Price:</span><span>₦4000</span></p>
                                                        <p className="cart-subtitle"><span className="cart-id">Color:</span><span>Red</span></p>
                                                        <p className="cart-subtitle"><span className="cart-id">Size:</span><span>L</span></p>
                                                        <p className="cart-subtitle"><span className="cart-id">Quantity:</span><span>2</span></p>
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
                                                        <p className="cart-subtitle"><span className="cart-id">Quantity:</span><span>2</span></p>
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
                                                        <p className="cart-subtitle"><span className="cart-id">Quantity:</span><span>2</span></p>
                                                        <p className="cart-subtitle"><span className="cart-id">Sub-total:</span><span>₦4000</span></p>
                                                        <button className="cart-icon"><img src={process.env.PUBLIC_URL+'/images/remove.svg'} alt="remove" /></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="fullwidth checkout-account-button-container">
                                                <button>Back to Bag</button>
                                                <button onClick={this.goForward}>Next</button>
                                            </div> 
                                        </div>
                                    )}
                                    {this.state.checkouttab.current === 1 && (
                                        <div>
                                            <div className="fullwidth product-input">
                                                <div className="fullwidth flex-row3">
                                                    <div className="flex-row halfwidth">
                                                        <label className="formtext">First Name:</label>
                                                        <input type="text" placeholder="First Name" className="fullwidth"/>
                                                    </div>
                                                    <div className="flex-row halfwidth">
                                                        <label className="formtext">Last Name:</label>
                                                        <input type="text" placeholder="Last Name" className="fullwidth"/>
                                                    </div>
                                                </div>
                                                <div className="fullwidth flex-row3">
                                                    <div className="flex-row halfwidth">
                                                        <label className="formtext">Email:</label>
                                                        <input type="text" placeholder="Email" className="fullwidth"/>
                                                    </div>
                                                    <div className="flex-row halfwidth">
                                                        <label className="formtext">Telephone:</label>
                                                        <input type="text" placeholder="Telephone" className="fullwidth"/>
                                                    </div>
                                                </div>
                                                <div className="flex-row fullwidth">
                                                    <label className="formtext">Address:</label>
                                                    <input type="text" placeholder="Address" className="fullwidth"/>
                                                </div>
                                                <div className="fullwidth flex-row3">
                                                    <div className="onethirdwidth flex-row">
                                                        <label className="formtext">Country:</label>
                                                        <select className="fullwidth">
                                                            <option>Nigeria</option>
                                                        </select>
                                                    </div>
                                                    <div className="onethirdwidth flex-row">
                                                        <label className="formtext">State:</label>
                                                        <select className="fullwidth">
                                                            <option>Lagos</option>
                                                        </select>
                                                    </div>
                                                    <div className="onethirdwidth flex-row">
                                                        <label className="formtext">City:</label>
                                                        <select className="fullwidth">
                                                            <option>Ikorodu</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <this.PaystackHookExample />
                                            <PaystackButton {...this.componentProps} /> */}
                                            <div className="fullwidth checkout-account-button-container">
                                                <button onClick={this.goBackward}>Back to Order Summary</button>
                                                <button onClick={this.goForward}>Make Payment</button>
                                            </div>
                                        </div>
                                    )}
                                    {this.state.checkouttab.current === 2 && (
                                        <div>
                                            <div>
                                                <div className="order-detail-top-2">
                                                    <p className="order-detail-subheading">Shipping Information</p>
                                                    <p className="order-detail-text">Farouk</p>
                                                    <p className="order-detail-text">Bakre</p>
                                                    <p className="order-detail-text">faroukbakre@yahoo.com</p>
                                                    <p className="order-detail-text">08145251688</p>
                                                    <p className="order-detail-text">13 Bola Adegbite Street, Odogunyan,</p>
                                                    <p className="order-detail-text">Ikorodu,</p>
                                                    <p className="order-detail-text">Lagos,</p>
                                                    <p className="order-detail-text">Nigeria.</p>
                                                </div>
                                                <div className="order-detail-top-2">
                                                    <p className="order-detail-subheading">Product Information</p>
                                                    <table className="order-detail-product-information">
                                                        <thead>
                                                            <tr>
                                                                <th>Product</th>
                                                                <th>Price</th>
                                                                <th>Quantity</th>
                                                                <th>Subtotal</th>
                                                            </tr>
                                                            
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td><a href="">Plain Casual Beach Shirt</a></td>
                                                                <td>₦14,000</td>
                                                                <td>4</td>
                                                                <td>₦56,000</td>
                                                            </tr>
                                                            <tr>
                                                                <td><a href="">Plain Casual Beach Shirt</a></td>
                                                                <td>₦14,000</td>
                                                                <td>4</td>
                                                                <td>₦56,000</td>
                                                            </tr>
                                                            <tr>
                                                                <td><a href="">Plain Casual Beach Shirt</a></td>
                                                                <td>₦14,000</td>
                                                                <td>4</td>
                                                                <td>₦56,000</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className="order-detail-top-2">
                                                    <p className="order-detail-subheading">Summary</p>
                                                    <table className="order-detail-product-information-2">
                                                        <tbody>
                                                            <tr>
                                                                <td>Subtotal:</td>
                                                                <td>₦168,000</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Shipping:</td>
                                                                <td>₦14,000</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Total:</td>
                                                                <td>₦182,000</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="fullwidth checkout-account-button-container">
                                                <button onClick={this.goBackward}>Back to Shipping details</button>
                                                <PaystackButton {...this.componentProps} />
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="cart-content-2">
                                    <p className="cart-subheading">ORDER TOTAL</p>
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
                                </div>
                            </div>
                        </div>
                    </div>
                <Footer/>
            </div>
        );
    }
    
}

export default Checkout;
