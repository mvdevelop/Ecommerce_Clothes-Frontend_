
import CartItems from '../components/CartItems';
import styles from './Cart.module.css';

function Cart() {

    return (
        <>
            <div className={styles.cart_container}>
                <CartItems />
            </div>
        </>
    )
}

export default Cart;
