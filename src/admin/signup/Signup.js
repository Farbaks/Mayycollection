import React from 'react';
import Header from '../../template/Header';
import Footer from '../../template/Footer';
import '../../assets/style/Trackorders.css';

function Signup() {
    
    document.getElementById("title").innerHTML="Admin | Sign up - Mayy Collection";   
    
  
    return (
    
    <div>
        <Header/>
            <div className="content">
                <div className="cart">
                    <p className="cart-heading">Create Admin Account</p>
                    <p className="trackorder-subheading">
                        Sign up to create account and place orders.
                    </p>
                    <div className="trackorder-form">
                        <input type="text" placeholder="Firstname" />
                        <input type="text" placeholder="Lastname" />
                        <input type="text" placeholder="Email" />
                        <input type="email" placeholder="Phone number" />
                        <input type="password" placeholder="Password" />
                        <input type="password" placeholder="Re-enter Password" />
                        <p className="trackorder-subheading">
                            I agree to the Terms and Conditions.
                        </p>
                        <button>Sign up</button>
                        
                        <p className="trackorder-subheading">
                            Already have an account? <a href="/admin/signin">Sign in</a>
                        </p>
                    </div>
                </div>
            </div>
        <Footer/>
    </div>
  );
}

export default Signup;
