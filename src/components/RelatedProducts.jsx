
import styles from './RelatedProducts.module.css';

import data_product from '../assets/data';
import Item from '../components/Item';

function RelatedProducts() {
  return (
    <>
        <div className={styles.relatedProducts_container}>
            <h1>Related Products</h1>
            <hr />
            <div className={styles.relatedProducts_item}>
                {data_product.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>
        </div>
    </>
  )
}

export default RelatedProducts;
