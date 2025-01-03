
import styles from './NewCollections.module.css';

// import new_collecions from '../assets/new_collections.js';
import Item from './Item';
import { useEffect, useState } from 'react';
// import { data } from 'react-router-dom';

function NewCollections() {

  const [ new_collecion, setNew_collection ] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/newcollections')
    .then((response) => response.json())
    .then((data) => setNew_collection(data));
  },[]);

  return (
    <>
      <div className={styles.new_collections_container}>
          <h1>New Collections</h1>
          <hr />
          <div className={styles.collections}>
            {new_collecion.map((item, i) => {
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
          </div>
      </div>
    </>
  )
}

export default NewCollections;
