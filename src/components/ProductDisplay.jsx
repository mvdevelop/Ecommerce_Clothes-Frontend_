
import styles from './ProductDisplay.module.css';

import star_icon from '../assets/star_icon.png';
import star_dull_icon from '../assets/star_dull_icon.png';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

function ProductDisplay(props) {

  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <>
        <div className={styles.product_display_container}>
            <div className={styles.product_display_left}>
                <div className={styles.product_display_img_list}>
                  <img src={product.image} alt="" />
                  <img src={product.image} alt="" />
                  <img src={product.image} alt="" />
                  <img src={product.image} alt="" />
                </div>
            </div>
            <div className={styles.product_display_img}>
              <img className={styles.product_display_main_img} src={product.image} alt="" />
            </div>
            <div className={styles.product_display_right}>
              <h1>{product.name}</h1>
              <div className={styles.product_display_right_stars}>
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
              </div>
              <div className={styles.product_display_right_prices}>
                <div className={styles.product_display_right_price_old}>
                  ${product.old_price}
                </div>
                <div className={styles.product_display_right_price_new}>
                  ${product.new_price}
                </div>
              </div>
              <div className={styles.product_display_right_description}> Elevate your style with our piece, featuring a modern color combination.
              </div>
              <div className={styles.product_display_right_size}>
                <h1>Select Size</h1>
                <div className={styles.product_display_right_sizes}>
                  <div>S</div>
                  <div>M</div>
                  <div>L</div>
                  <div>XL</div>
                  <div>XXL</div>
                </div>
              </div>
              <button onClick={() => {addToCart(product.id)}}>ADD TO CART</button>
              <p className={styles.product_display_right_category}>
                <span>Category :</span>Women, T-Shirt, Crop Top
              </p>
              <p className={styles.product_display_right_category}>
                <span>Tags :</span>Modern, Latest
              </p>
              <p className={styles.product_display_right_category}>
                <span>Category :</span>Women, T-Shirt, Crop Top
              </p>
            </div>
        </div>
    </>
  )
}

export default ProductDisplay;
