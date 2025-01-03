
import styles from './CartItems.module.css';

import { ShopContext } from '../context/ShopContext';
import { useContext } from 'react';
import remove_icon from '../assets/cart_cross_icon.png';

function CartItems() {

    const { all_product, cartItems, removefromCart, getTotalCartAmount } = useContext(ShopContext);

    return (
        <>
            <div className={styles.cartItems_container}>
                <div className={styles.cartItems_format_main}>
                    <p>Products</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <hr />
                {all_product.map((e) => {
                    if(cartItems[e.id] > 0) {
                        return <div>
                        <div className={styles.cartItems_format}>
                            <img src={e.image} alt="" className={styles.cartIcon_product_icon} />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className={styles.cartItems_quantity}>{cartItems[e.id]}</button>
                            <p>${e.new_price*cartItems[e.id]}</p>
                            <img className={styles.cartItems_remove_icon} src={remove_icon} onClick={() => {removefromCart(e.id)}} alt="" />
                        </div>
                        <hr />
                    </div>
                    }
                    return null;
                })}
                <div className={styles.cartItems_down}>
                    <div className={styles.cartItems_total}>
                        <h1>Cart Totals</h1>
                        <div>
                            <div className={styles.cartItems_total_item}>
                                <p>Subtotal</p>
                                <p>${getTotalCartAmount()}</p>
                            </div>
                            <hr />
                            <div className={styles.cartItems_total_item}>
                                <p>Shipping Fee</p>
                                <p>Free</p>
                            </div>
                            <hr />
                            <div className={styles.cartItems_total_item}>
                                <h3>Total</h3>
                                <h3>${getTotalCartAmount()}</h3>
                            </div>
                        </div>
                        <button>PROCEED TO CHECKOUT</button>
                    </div>
                    <div className={styles.cartItems_promoCode}>
                        <p>If you have a promo code, Enter it here.</p>
                        <div className={styles.cartItems_promoBox}>
                            <input type="text" placeholder='Promo Code'/>
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItems;
