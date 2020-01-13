import React from 'react';
import Header from './template/Header';
import {Fade} from 'react-slideshow-image';
// import logo from './logo.svg';
import './assets/style/Home.css';

function Home() {
  
    const properties = {
        duration: 5000,
        transitionDuration: 500,
        infinite:true,
        arrows:true,
        onChange:(oldIndex, newIndex) => {
            console.log(`slide transition from ${oldIndex} to ${newIndex}`);
        }
    }
  
  
    return (
    
    <div>
        <Header/>

        <div className="home">
            <div className="bigsection">
                <Fade {...properties}>
                    <div className="section-box">
                        <div className="sec-box-text">
                            <p>SHOP</p>
                            <p>WOMEN</p>
                            <a>SHOP NOW</a>
                        </div>
                        <div className="sec-box-image">
                            <img src={process.env.PUBLIC_URL+'/images/shirt1.jpg'} alt="shirt1" />
                        </div>
                        <a className="big-below-link"> SHOP NOW</a>
                    </div>
                    <div className="section-box">
                        <div className="sec-box-text">
                            <p>SHOP</p>
                            <p>MEN</p>
                            <a>SHOP NOW</a>
                        </div>
                        <div className="sec-box-image">
                            <img src={process.env.PUBLIC_URL+'/images/shirt19.jpg'} alt="shirt1" />
                        </div>
                        <a className="big-below-link"> SHOP NOW</a>
                    </div>
                    <div className="section-box">
                        <div className="sec-box-text">
                            <p>SHOP</p>
                            <p>MAYY</p>
                            <p>COLLECTION</p>
                            <a>SHOP NOW</a>
                        </div>
                        <div className="sec-box-image">
                            <img src={process.env.PUBLIC_URL+'/images/shirt2.jpg'} alt="shirt2" />
                        </div>
                        <a className="big-below-link"> SHOP NOW</a>
                    </div>
                </Fade>
            </div>
            <div className="section-2">
                <p className="section-2-title">Shop the trending categories</p>
                <div className="section-2-container">
                    <div className="section-2-card">
                        <a href="#" className="section-2-card-image">
                            <img src={process.env.PUBLIC_URL+'/images/shirt2.jpg'} alt="shirt2" />
                        </a>
                        <p>CASUAL DENIM</p>
                        <p>Rock your casula denim wear</p>
                        <a>SHOP NOW</a>
                    </div>
                    <div className="section-2-card">
                        <a href="#" className="section-2-card-image">
                            <img src={process.env.PUBLIC_URL+'/images/shoe3.jpg'} alt="shirt2" />
                        </a>
                        <p>CASUAL DENIM</p>
                        <p>Rock your casula denim wear</p>
                        <a>SHOP NOW</a>
                    </div>
                    <div className="section-2-card">
                        <a href="#" className="section-2-card-image">
                            <img src={process.env.PUBLIC_URL+'/images/shoe2.jpg'} alt="shirt2" />
                        </a>
                        <p>CASUAL DENIM</p>
                        <p>Rock your casula denim wear</p>
                        <a>SHOP NOW</a>
                    </div>
                    <div className="section-2-card">
                        <a href="#" className="section-2-card-image">
                            <img src={process.env.PUBLIC_URL+'/images/shirt5.jpg'} alt="shirt2" />
                        </a>
                        <p>CASUAL DENIM</p>
                        <p>Rock your casula denim wear</p>
                        <a>SHOP NOW</a>
                    </div>
                    <div className="section-2-card">
                        <a href="#" className="section-2-card-image">
                            <img src={process.env.PUBLIC_URL+'/images/shirt9.jpg'} alt="shirt2" />
                        </a>
                        <p>CASUAL DENIM</p>
                        <p>Rock your casula denim wear</p>
                        <a>SHOP NOW</a>
                    </div>
                    <div className="section-2-card">
                        <a href="#" className="section-2-card-image">
                            <img src={process.env.PUBLIC_URL+'/images/shirt11.jpg'} alt="shirt2" />
                        </a>
                        <p>CASUAL DENIM</p>
                        <p>Rock your casula denim wear</p>
                        <a>SHOP NOW</a>
                    </div>
                    <div className="section-2-card">
                        <a href="#" className="section-2-card-image">
                            <img src={process.env.PUBLIC_URL+'/images/shirt12.jpg'} alt="shirt2" />
                        </a>
                        <p>CASUAL DENIM</p>
                        <p>Rock your casula denim wear</p>
                        <a>SHOP NOW</a>
                    </div>
                    <div className="section-2-card">
                        <a href="#" className="section-2-card-image">
                            <img src={process.env.PUBLIC_URL+'/images/shirt20.jpg'} alt="shirt2" />
                        </a>
                        <p>CASUAL DENIM</p>
                        <p>Rock your casula denim wear</p>
                        <a>SHOP NOW</a>
                    </div>
                </div>
            </div>
            <div className="section-3">
                <p className="section-3-title">Best Sellers</p>
                <div className="content-heading-line">
                    <div className="line"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="line"></div>
                </div>
                <div className="section-3-container">
                    <div className="section-3-card">

                    </div>
                    <div className="section-3-card">

                    </div>
                    <div className="section-3-card">

                    </div>
                    <div className="section-3-card">

                    </div>
                    <div className="section-3-card">

                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Home;
