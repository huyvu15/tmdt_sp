import React, { useContext, useState } from "react";
import './Navbar.css';
import { Link } from "react-router-dom";
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>Navi Store</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => setMenu("shop")}> <Link style={{textDecoration: 'none', color: 'white'}} to='/'> Shop </Link> {/*menu === "shop" ? <hr /> : <></>*/}</li>
                <li onClick={() => setMenu("mens")}> <Link style={{textDecoration: 'none', color: 'white'}} to='/mens'> Chăn </Link> {/*menu === "mens" ? <hr /> : <></>*/}</li>
                <li onClick={() => setMenu("womens")}> <Link style={{textDecoration: 'none', color: 'white'}} to='/womens'> Ga </Link> {/*menu === "womens" ? <hr /> : <></>*/}</li>
                <li onClick={() => setMenu("kids")}> <Link style={{textDecoration: 'none', color: 'white'}} to='/kids'> Gối </Link> {/*menu === "kids" ? <hr /> : <></>*/}</li>
                <li onClick={() => setMenu("kids")}> <Link style={{textDecoration: 'none', color: 'white'}} to='/mens'> Đệm </Link> {/*menu === "kids" ? <hr /> : <></>*/}</li>
            </ul>
            <div className="nav-login-cart">
                {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');
                    window.location.replace('/')
                }}>Logout</button>:<Link to='/login'><button onClick={() => setMenu("login")}>Login</button></Link>}
                <Link to='/cart'><img src={cart_icon} alt="" onClick={() => setMenu("cart")} /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    )
}
export default Navbar;