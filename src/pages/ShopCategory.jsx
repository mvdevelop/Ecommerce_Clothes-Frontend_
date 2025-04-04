
import styles from './ShopCategory.module.css';

import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import dropdown_icon from '../assets/dropdown_icon.png';
import Item from '../components/Item';

function ShopCategory(props) {

    const {all_product} = useContext(ShopContext);

    return (
        <>
            <div className={styles.shop_category_container}>
                <img className={styles.shop_category_banner} src={props.banner} alt="" />
                <div className={styles.shop_category_indexSort}>
                    <p>
                        <span>Showing 1-12</span> out of 36 products
                    </p>
                    <div className={styles.shop_category_sort}>
                        Sort by <img src={dropdown_icon} alt="" />
                    </div>
                </div>
                <div className={styles.shop_category_products}>
                    {all_product.map((item, i) => {
                        if (props.category === item.category) {
                            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                        } else {
                            return null;
                        }
                    })}
                </div>
                <div className={styles.shop_category_loadmore}>
                    Explore More
                </div>
            </div>
        </>
    )
}

export default ShopCategory;
