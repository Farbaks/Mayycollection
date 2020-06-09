import React from 'react';
import Header from '../../template/Header';
import Footer from '../../template/Footer';
import '../../assets/style/Trackorders.css';

function Signin() {
    
    document.getElementById("title").innerHTML="Sign in - Mayy Collection";   
    
  
    return (
    
    <div>
        <Header/>
            <div className="content">
                <div className="cart">
                    <p className="cart-heading">Sign in</p>
                    <p className="trackorder-subheading">
                        Sign in to access Account information and place orders.
                    </p>
                    <div className="trackorder-form">
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>Sign In</button>
                        <p className="trackorder-subheading">
                            I think I <a href="/user/forgotpassword">Forgot my Password?</a>
                        </p>
                        <p className="trackorder-subheading">
                            Don't have an account? <a href="/user/signup">Create Account</a>
                        </p>
                    </div>
                </div>
            </div>
        <Footer/>
    </div>
  );
}

export default Signin;
