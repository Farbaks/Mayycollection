import React from 'react';
import '../assets/style/Header.css';

function Header() {

  let women = "1";
  let men = "2";
  function str(el) {
    if(!el) return "null"
    return el.id;
  }
  function showCat(n) {
    if(n==="1") {
      document.getElementById('women-cat').style.top="70px";
      document.getElementById('men-cat').style.top="10px";
    }

    if(n==="2") {
      document.getElementById('men-cat').style.top="70px";
      document.getElementById('women-cat').style.top="10px";
    }
    if(n==="womenclothing") {
      document.getElementById('women-clothing-dropdown').style.top="130px";
      // document.getElementById('women-cat').style.top="10px";
    }
    if(n==="womenfootwear") {
      document.getElementById('women-footwear-dropdown').style.top="130px";
      // document.getElementById('women-cat').style.top="10px";
    }
    if(n==="menclothing") {
      document.getElementById('men-clothing-dropdown').style.top="130px";
      // document.getElementById('women-cat').style.top="10px";
    }
    if(n==="user") {
      document.getElementById('triangle').style.opacity="1";
      document.getElementById('user').style.top="70px";
      // document.getElementById('women-cat').style.top="10px";
    }
    if(n==="side-women-clothing") {
      if(document.getElementById('side-women-clothing').style.display != "flex") {
        document.getElementById('side-women-clothing').style.display="flex";
        document.getElementById('women-clothing-p1').style.opacity="0";

        document.getElementById('side-women-footwear').style.display="none";
        document.getElementById('women-footwear-p1').style.opacity="1";
      }
      else {
        document.getElementById('side-women-clothing').style.display="none";
        document.getElementById('women-clothing-p1').style.opacity="1";
      }
    }
    if(n==="side-women-footwear") {
      if(document.getElementById('side-women-footwear').style.display != "flex") {
        document.getElementById('side-women-footwear').style.display="flex";
        document.getElementById('women-footwear-p1').style.opacity="0";

        document.getElementById('side-women-clothing').style.display="none";
        document.getElementById('women-clothing-p1').style.opacity="1";
      }
      else {
        document.getElementById('side-women-footwear').style.display="none";
        document.getElementById('women-footwear-p1').style.opacity="1";
      }
    }
    if(n==="side-men-clothing") {
      if(document.getElementById('side-men-clothing').style.display != "flex") {
        document.getElementById('side-men-clothing').style.display="flex";
        document.getElementById('men-clothing-p1').style.opacity="0";
      }
      else {
        document.getElementById('side-men-clothing').style.display="none";
        document.getElementById('men-clothing-p1').style.opacity="1";
      }
    }
    
    if(n==="side-women") {
      document.getElementById('side-women-cat').style.display="block";
      document.getElementById('side-women').style.borderBottom="solid 2px black";
      document.getElementById('side-women').style.color="black";

      document.getElementById('side-men-cat').style.display="none";
      document.getElementById('side-men').style.borderBottom="none";
      document.getElementById('side-men').style.color="rgb(150,150,150)";
      // document.getElementById('women-cat').style.top="10px";
    }
    if(n==="side-men") {
      document.getElementById('side-men-cat').style.display="block";
      document.getElementById('side-men').style.borderBottom="solid 2px black";
      document.getElementById('side-men').style.color="black";

      document.getElementById('side-women-cat').style.display="none";
      document.getElementById('side-women').style.borderBottom="none";
      document.getElementById('side-women').style.color="rgb(150,150,150)";
      // document.getElementById('women-cat').style.top="10px";
    }
  }
  function hideCat(n) {
    if(n==="womenclothing") {
      document.getElementById('women-clothing-dropdown').style.top="15px";
    }
    if(n==="womenfootwear") {
      document.getElementById('women-footwear-dropdown').style.top="15px";
    }
    if(n==="menclothing") {
      document.getElementById('men-clothing-dropdown').style.top="15px";
    }
    if(n==="user") {
      document.getElementById('triangle').style.opacity="0";
      document.getElementById('user').style.top="-350px";
      // document.getElementById('women-cat').style.top="10px";
    }
  }

  function open(){
    let b1 = document.getElementById('b1');
    let b2 = document.getElementById('b2');
    let b3 = document.getElementById('b3');
    let menu = document.getElementById('smenu');
    let menuContent = document.getElementById('smenucontent');
    
    b1.style.width = "60%";
    b2.style.width = "110%";
    b3.style.width = "85%";
    menu.style.display = "flex";
    menu.style.opacity = "1";
    setTimeout(function(){
      menuContent.style.left = "0%";
    }, 100);
  }

  function close(e){
    let b1 = document.getElementById('b1');
    let b2 = document.getElementById('b2');
    let b3 = document.getElementById('b3');
    let menu = document.getElementById('smenu');
    let menuContent = document.getElementById('smenucontent');
  
    b1.style.width = "100%";
    b2.style.width = "100%";
    b3.style.width = "75%";
      
    if(e.target.id == "smenu") {
      menuContent.style.left = "-85%";
      setTimeout(function(){
        menu.style.opacity = "0";
        menu.style.display = "none";
      }, 480);
    }
  }

  function showMenu() {
    let menu = document.getElementById('smenu');
    if(menu.style.display === "flex") {
      let b1 = document.getElementById('b1');
      let b2 = document.getElementById('b2');
      let b3 = document.getElementById('b3');
      let menu = document.getElementById('smenu');
      let menuContent = document.getElementById('smenucontent');
    
      b1.style.width = "100%";
      b2.style.width = "100%";
      b3.style.width = "75%";
        
      menuContent.style.left = "-85%";
      setTimeout(function(){
        menu.style.opacity = "0";
        menu.style.display = "none";
      }, 480);
    }
    else {
      open();
    }
  }


  var position = window.pageYOffset;
  window.onscroll = function() {
    var scroll = window.pageYOffset;
    // console.log(scroll);
    document.getElementById('women-cat').style.top="-80px";
    document.getElementById('men-cat').style.top="-80px";
    document.getElementById('women-clothing-dropdown').style.top="-80px";
    document.getElementById('women-footwear-dropdown').style.top="-80px";
    document.getElementById('men-clothing-dropdown').style.top="-80px";
    
    if(scroll > position && scroll > 100){
      document.getElementById('navbar').style.top = "-77px";
      document.getElementById('smenucontent').style.top = "0px";
      document.getElementById('smenu').style.top = "0px";
    }
    else{
      document.getElementById('navbar').style.top = "0";
      document.getElementById('smenucontent').style.top = "66px";
    }
    position = scroll;
  }


  return (
    <div className="header">
      <div className="header-top" id="navbar">
        <div className="header-top-left">
          <div className="Header-sidemenu-button" onClick={showMenu}>
            <div className="bar1" id="b1"></div>
            <div className="bar1" id="b2"></div>
            <div className="bar2" id="b3"></div>
          </div>
          <a href="" className="header-logo">
            <img src={process.env.PUBLIC_URL+'/images/logo.png'} alt="logo" />
          </a>
          <div className="header-category">
            <a id="women" onClick={() => showCat(women)} >WOMEN</a>
            <a id="men" onClick={() => showCat(men)} >MEN</a>
            <a>CUSTOM ORDER</a>
          </div>
        </div>
        
        <div className="header-search">
          <input placeholder="Search for items, brands and categories"></input>
          <button>
            <img src={process.env.PUBLIC_URL+'/images/searchbutton.svg'} alt="searchbutton" />
          </button>
        </div>
        <div className="header-buttons">
          <div className="button-icon"
            onMouseOver={() => showCat('user')} 
            onMouseOut={() => hideCat('user')}>
            <img src={process.env.PUBLIC_URL+'/images/user2.svg'} alt="user" />
            <div className="triangle" id='triangle'></div>
          </div>
          <a className="button-icon">
            <img src={process.env.PUBLIC_URL+'/images/saveditem.svg'} alt="saveditem" />
          </a>
          <a className="button-icon">
            <img src={process.env.PUBLIC_URL+'/images/shoppingbag.svg'} alt="shoppingbag" />
            <span>86</span>
          </a>
        </div>
        <div className="header-buttons-1">
        <a className="button-icon"  onClick={showMenu}>
            <img src={process.env.PUBLIC_URL+'/images/searchbutton.svg'} alt="search" />
            <div className="triangle" id='triangle'></div>
          </a>
          <a className="button-icon" >
            <img src={process.env.PUBLIC_URL+'/images/user2.svg'} alt="user" />
            <div className="triangle" id='triangle'></div>
          </a>
          <a className="button-icon">
            <img src={process.env.PUBLIC_URL+'/images/saveditem.svg'} alt="saveditem" />
          </a>
          <a className="button-icon">
            <img src={process.env.PUBLIC_URL+'/images/shoppingbag.svg'} alt="shoppingbag" />
            <span>86</span>
          </a>
        </div>
      </div>
      <div>
        <div className="header-bottom-1" id="women-cat">
          <a>
            New in
          </a>
          <a>
            View all
          </a>
          <a
          onMouseOver={() => showCat('womenclothing')} 
          onMouseOut={() => hideCat('womenclothing')}>
            Clothing
          </a>
          
          <a>
            Body Products
          </a>
          <a onMouseOver={() => showCat('womenfootwear')} 
          onMouseOut={() => hideCat('womenfootwear')}>
            Footwear
          </a>
        </div>
        <div className="header-bottom-1" id="men-cat">
          <a>
            New in
          </a>
          <a>
            View all
          </a>
          <a onMouseOver={() => showCat('menclothing')} 
          onMouseOut={() => hideCat('menclothing')}>
            Clothing
          </a>
        </div>
      </div>
      <div>
        <div className="header-bottom-2" id="women-clothing-dropdown" 
          onMouseOver={() => showCat('womenclothing')}
          onMouseOut={() => hideCat('womenclothing')}>
          <a>
            Top
          </a>
          <a>
            Blouses
          </a>
          <a>
            Skirts
          </a>
          <a>
            Jeans
          </a>
        </div>
        <div className="header-bottom-2" id="women-footwear-dropdown" 
          onMouseOver={() => showCat('womenfootwear')}
          onMouseOut={() => hideCat('womenfootwear')}>
          <a>
            Shoes
          </a>
          <a>
            Sandals
          </a>
        </div>
        <div className="header-bottom-2" id="men-clothing-dropdown" 
          onMouseOver={() => showCat('menclothing')}
          onMouseOut={() => hideCat('menclothing')}>
          <a>
            Tshirts
          </a>
          <a>
            Shirts
          </a>
          <a>
            Polos
          </a>
        </div>
      </div>
      <div className="user" id="user"
        onMouseOver={() => showCat('user')} 
        onMouseOut={() => hideCat('user')}>
        
        <div className="user-login">
          <a>Sign In</a>
          <a>Join</a>
        </div>
        <a className="user-detail">
          <div className="button-icon-1">
            <img src={process.env.PUBLIC_URL+'/images/user2.svg'} alt="user" />
          </div>
          <p>My Account</p>
        </a>
        <a className="user-detail">
          <div className="button-icon-1">
            <img src={process.env.PUBLIC_URL+'/images/user2.svg'} alt="user" />
          </div>
          <p>My Orders</p>
        </a>
        <a className="user-detail">
          <div className="button-icon-1">
            <img src={process.env.PUBLIC_URL+'/images/user2.svg'} alt="user" />
          </div>
          <p>Return Information</p>
        </a>
        <a className="user-detail">
          <div className="button-icon-1">
            <img src={process.env.PUBLIC_URL+'/images/user2.svg'} alt="user" />
          </div>
          <p>Contact Information</p>
        </a>
      </div>  
      <div className="sidemenu" id="smenu" onClick={(e) =>close(e)}> 
      <div className="sidemenu-content" id="smenucontent">
          <div className="side-search">
            <input placeholder="Search for items, brands and categories" />
            <button>
              <img src={process.env.PUBLIC_URL+'/images/searchbutton.svg'} alt="searchbutton" />
            </button>
          </div>
          <div className="side-cat">
            <div className="side-cat-name" id="side-women" onClick={() => showCat("side-women")}>WOMEN</div>
            <div className="side-cat-name" id="side-men" onClick={() => showCat("side-men")}>MEN</div>
          </div>
          <div className="side-women" id="side-women-cat">
            <div className="side-women-item">View all</div>
            <div className="side-women-item">New In</div>
            <div className="side-women-item" onClick={() => showCat("side-women-clothing")}>
              Clothing
              <div className="plus">
                <div className="p1"></div>
                <div className="p2" id="women-clothing-p1"></div>
              </div>
            </div>
            <div className="side-sub-cat" id="side-women-clothing">
              <a>Tops</a>
              <a>Blouses</a>
              <a>Skirts</a>
              <a>Jeans</a>
            </div>
            <div className="side-women-item">Body Products</div>
            <div className="side-women-item" onClick={() => showCat("side-women-footwear")}>
              Footwear
              <div className="plus">
                <div className="p1"></div>
                <div className="p2" id="women-footwear-p1"></div>
              </div>
            </div>
            <div className="side-sub-cat" id="side-women-footwear">
              <a>Shoes</a>
              <a>Sandals</a>
            </div>
          </div>
          <div className="side-women" id="side-men-cat">
            <div className="side-women-item">View all</div>
            <div className="side-women-item">New In</div>
            <div className="side-women-item" onClick={() => showCat("side-men-clothing")}>
              Clothing
              <div className="plus">
                <div className="p1"></div>
                <div className="p2" id="men-clothing-p1"></div>
              </div>
            </div>
            <div className="side-sub-cat" id="side-men-clothing">
              <a>Tshirts</a>
              <a>Shirts</a>
              <a>Polos</a>
            </div>
          </div>
          <div className="side-cat">
            <a className="center" href="">PLACE CUSTOM ORDER</a>
          </div>
          <div className="side-women">
            
            <div className="small-user-login">
              <a>Sign In</a>
              <a>Join</a>
            </div>
            <a className="small-user-detail">
              <div className="button-icon-1">
                <img src={process.env.PUBLIC_URL+'/images/user2.svg'} alt="user" />
              </div>
              <p>My Account</p>
            </a>
            <a className="small-user-detail">
              <div className="button-icon-1">
                <img src={process.env.PUBLIC_URL+'/images/user2.svg'} alt="user" />
              </div>
              <p>My Orders</p>
            </a>
            <a className="small-user-detail">
              <div className="button-icon-1">
                <img src={process.env.PUBLIC_URL+'/images/user2.svg'} alt="user" />
              </div>
              <p>Return Information</p>
            </a>
            <a className="small-user-detail">
              <div className="button-icon-1">
                <img src={process.env.PUBLIC_URL+'/images/user2.svg'} alt="user" />
              </div>
              <p>Contact Information</p>
            </a>
          </div>  

        </div>
      </div>
      
    </div>
  );
}

export default Header;
