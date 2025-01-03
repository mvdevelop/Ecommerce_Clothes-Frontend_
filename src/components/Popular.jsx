
import styles from './Popular.module.css';

import { useEffect, useState } from 'react';
// import data_product from '../assets/data.js';
import Item from './Item';

const Popular = () => {

  const [ popularProducts, setPopularProducts ] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/popularinwomen')
    .then((response) => response.json())
    .then((data) => setPopularProducts(data));
  },[]);

  return (
    <>
        <div className={styles.popular_container}>
            <h1>Popular in Women</h1>
            <hr />
            <div className={styles.popular_item}>
                {popularProducts.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}
                    />
                })}
            </div>
        </div>
    </>
  )
}

export default Popular;
