
import styles from './Offers.module.css';

import exclusive_image from '../assets/exclusive_image.png';

function Offers() {
  return (
    <>
        <div className={styles.offers_container}>
            <div className={styles.offers_left}>
                <h1>Exclusive</h1>
                <h1>Offers For You</h1>
                <p>Only On Best Sellers Products</p>
                <button>Check Now</button>
            </div>
            <div className={styles.offers_right}>
                <img src={exclusive_image} alt="" />
            </div>
        </div>
    </>
  )
}

export default Offers;
