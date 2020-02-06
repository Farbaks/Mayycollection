import React from 'react';
import Header from '../template/Header';
import Footer from '../template/Footer';
import '../assets/style/Search.css';

function Bag() {
    
    document.getElementById("title").innerHTML="Search Result - Mayy Collection";

    function openfilter(n) {
        if (document.getElementById(n+"-list").style.display != "flex") {
            document.getElementById(n+"-list").style.display = "flex";
            document.getElementById(n+"-bar1").style.display = "none";
        }
        else {
            document.getElementById(n+"-list").style.display = "none";
            document.getElementById(n+"-bar1").style.display = "block";
        }
    }
    
    function showfilter() {
        document.getElementById("filter-container").style.display = "flex";
    }
    function hidefilter() {
        document.getElementById("filter-container").style.display = "none";
    }
    return (
    
    <div>
        <Header/>
            <div className="content search">
                <p className="cart-heading">AZTECH</p>
                <div className="search-container">
                    <div className="filter" id="filter-container">
                        <div className="filter-title">
                            <span>Filter (<span>6</span>)</span>
                            <div className="cancel" onClick={hidefilter}><div></div></div>
                        </div>
                        <div className="selected-filter">
                            <div className="selected-item">
                                ₦1,000 - ₦2,500
                            </div>
                            <div className="selected-item">
                                Black
                            </div>
                            <div className="selected-item">
                                Grey
                            </div>
                            <div className="selected-item">
                                Blouses
                            </div>
                            <div className="clear-filter">
                                Clear all
                            </div>
                        </div>
                        <div className="filter-content">
                            <div className="filter-subtitle" onClick={() => openfilter('price')}>
                                <p>PRICE</p>
                                <div className="filter-cross">
                                    <div className="filter-bar" id="price-bar1"></div>
                                    <div className="filter-bar"></div>
                                </div>
                            </div>
                            <div className="filter-list" id="price-list">
                                <div className="filter-item"><input type="checkbox" /><div className="checkbox"></div><span>₦1,000 - ₦2,500</span></div>
                                <div className="filter-item"><input type="checkbox" /><div className="checkbox"></div><span>₦2,500 - ₦6 ,500</span></div>
                            </div>
                        </div>
                        <div className="filter-content">
                            <div className="filter-subtitle" onClick={() => openfilter('category')}>
                                <p>CATEGORY</p>
                                <div className="filter-cross">
                                    <div className="filter-bar" id="category-bar1"></div>
                                    <div className="filter-bar"></div>
                                </div>
                            </div>
                            <div className="filter-list" id="category-list">
                                <div className="filter-item"><input type="checkbox" /><div className="checkbox"></div><span>Polos</span></div>
                                <div className="filter-item"><input type="checkbox" /><div className="checkbox"></div><span>T-shirts</span></div>
                                <div className="filter-item"><input type="checkbox" /><div className="checkbox"></div><span>Blouses</span></div>
                            </div>
                        </div>
                        <div className="filter-content">
                            <div className="filter-subtitle" onClick={() => openfilter('color')}>
                                <p>COLOR</p>
                                <div className="filter-cross">
                                    <div className="filter-bar" id="color-bar1"></div>
                                    <div className="filter-bar"></div>
                                </div>
                            </div>
                            <div className="filter-list" id="color-list">
                            <div className="filter-item"><input type="checkbox" /><div className="checkbox"></div><span>Black</span></div>
                                <div className="filter-item"><input type="checkbox" /><div className="checkbox"></div><span>Blue</span></div>
                                <div className="filter-item"><input type="checkbox" /><div className="checkbox"></div><span>Beige</span></div>
                            </div>
                        </div>
                        <div className="filter-content">
                            <div className="filter-subtitle" onClick={() => openfilter('size')}>
                                <p>SIZE</p>
                                <div className="filter-cross">
                                    <div className="filter-bar" id="size-bar1"></div>
                                    <div className="filter-bar"></div>
                                </div>
                            </div>
                            <div className="filter-list" id="size-list">
                            <div className="filter-item"><input type="checkbox" /><div className="checkbox"></div><span>S</span></div>
                                <div className="filter-item"><input type="checkbox" /><div className="checkbox"></div><span>M</span></div>
                                <div className="filter-item"><input type="checkbox" /><div className="checkbox"></div><span>L</span></div>
                            </div>
                        </div>
                        <button>VIEW ITEMS</button>
                    </div>
                    <div className="search-container-2">
                        <div className="sort">
                            <div className="sort-container">
                                
                                <span onClick={showfilter}>Filter</span>
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
                        <div className="search-list">
                            <a href="#" className="search-card">
                                <div className="search-card-image">
                                    <img src={process.env.PUBLIC_URL+'/images/shoe3.jpg'} alt="shoe2" />
                                </div>
                                <p className="search-card-name">
                                    ASOS DESIGN regular stripe shirt in navy and brown
                                </p>
                                <div className="search-card-price">
                                    <p className="sale-price">₦4,000</p>
                                    <p className="normal-price">₦5,900</p>
                                </div>
                            </a>
                            <a href="#" className="search-card">
                                <div className="search-card-image">
                                    <img src={process.env.PUBLIC_URL+'/images/shoe2.jpg'} alt="shoe2" />
                                </div>
                                <p className="search-card-name">
                                    ASOS DESIGN regular stripe shirt in navy and brown
                                </p>
                                <div className="search-card-price">
                                    <p className="sale-price">₦4,500</p>
                                    <p className="normal-price">₦7,900</p>
                                </div>
                            </a>
                            <a href="#" className="search-card">
                                <div className="search-card-image">
                                    <img src={process.env.PUBLIC_URL+'/images/shirt3.jpg'} alt="shoe2" />
                                </div>
                                <p className="search-card-name">
                                    ASOS DESIGN regular stripe shirt in navy and brown
                                </p>
                                <div className="search-card-price">
                                    <p className="sale-price">₦12,000</p>
                                    <p className="normal-price">₦5,900</p>
                                </div>
                            </a>
                            <a href="#" className="search-card">
                                <div className="search-card-image">
                                    <img src={process.env.PUBLIC_URL+'/images/shirt21.jpg'} alt="shoe2" />
                                </div>
                                <p className="search-card-name">
                                    ASOS DESIGN regular stripe shirt in navy and brown
                                </p>
                                <div className="search-card-price">
                                    <p className="sale-price">₦2,000</p>
                                    <p className="normal-price">₦5900</p>
                                </div>
                            </a>
                            <a href="#" className="search-card">
                                <div className="search-card-image">
                                    <img src={process.env.PUBLIC_URL+'/images/shoe4.jpg'} alt="shoe2" />
                                </div>
                                <p className="search-card-name">
                                    ASOS DESIGN regular stripe shirt in navy and brown
                                </p>
                                <div className="search-card-price">
                                    <p className="sale-price">₦14,000</p>
                                    <p className="normal-price">₦15,900</p>
                                </div>
                            </a>
                            <a href="#" className="search-card">
                                <div className="search-card-image">
                                    <img src={process.env.PUBLIC_URL+'/images/shirt8.jpg'} alt="shoe2" />
                                </div>
                                <p className="search-card-name">
                                    ASOS DESIGN regular stripe shirt in navy and brown
                                </p>
                                <div className="search-card-price">
                                    <p className="sale-price">₦4,000</p>
                                    <p className="normal-price">₦5,900</p>
                                </div>
                            </a>
                            <a href="#" className="search-card">
                                <div className="search-card-image">
                                    <img src={process.env.PUBLIC_URL+'/images/cap2.jpg'} alt="shoe2" />
                                </div>
                                <p className="search-card-name">
                                    ASOS DESIGN regular stripe shirt in navy and brown
                                </p>
                                <div className="search-card-price">
                                    <p className="sale-price">₦3,000</p>
                                    <p className="normal-price">₦3,500</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        <Footer/>
    </div>
  );
}

export default Bag;
