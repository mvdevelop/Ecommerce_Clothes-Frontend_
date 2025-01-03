
import styles from './Breadcrum.module.css';
import arrow_icon from '../assets/breadcrum_arrow.png';

function Breadcrum(props) {

  const { product } = props;

  return (
    <>
        <div className={styles.breadcrum_container}>
            HOME <img src={arrow_icon} alt="" /> 
            SHOP <img src={arrow_icon} alt="" />
            {product.category} <img src={arrow_icon} alt="" />
            {product.name} <img src={arrow_icon} alt="" />
        </div>
    </>
  )
}

export default Breadcrum;
