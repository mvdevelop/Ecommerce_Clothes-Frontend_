/* eslint-disable jsx-a11y/anchor-is-valid */

import styles from './Navbar.module.css';

import logo from '../assets/logo.png';
import { FaCartPlus } from 'react-icons/fa';
import { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import nav_dropdown from '../assets/nav_dropdown.png';

function Navbar() {

  const [ menu, setMenu ] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle(styles.nav_menu_visible);
    e.target.classList.toggle(styles.nav_dropdown_open);
  }

  return (
    <>
        <div className={styles.navbar_container}>
          <div className={styles.nav_logo}>
            <img src={logo} alt="" />
            <h4>Clothes.com</h4>
          </div>
          <img className={styles.nav_dropdown} onClick={dropdown_toggle} src={nav_dropdown} alt="" />
            <nav ref={menuRef} className={styles.nav_menu}>
              <li onClick={() => {setMenu("shop")}}><Link to={'/'} className={styles.nav_link}>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
              <li onClick={() => {setMenu("men")}}><Link to={'/men'} className={styles.nav_link}>Men</Link>{menu==="men"?<hr/>:<></>}</li>
              <li onClick={() => {setMenu("women")}}><Link to={'/women'} className={styles.nav_link}>Women</Link>{menu==="women"?<hr/>:<></>}</li>
              <li onClick={() => {setMenu("kids")}}><Link to={'/kids'} className={styles.nav_link}>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
            </nav>
          <div className={styles.nav_login_cart}>
            {localStorage.getItem('auth-token')
            ?<button onClick={() => {localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
            :<Link to={'/login'}><button>Login</button></Link>}
            <Link to={'/cart'} className={styles.cart}>
              <FaCartPlus />
            </Link>
            <div className={styles.nav_cart_count}>{getTotalCartItems()}</div>
          </div>
        </div>
    </>
  )
}

export default Navbar;
