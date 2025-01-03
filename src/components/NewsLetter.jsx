
import styles from './NewsLetter.module.css';

function NewsLetter() {
  return (
    <>
        <div className={styles.newsLetter_container}>
            <h1>Get Exclusive Ofeers On Your Email</h1>
            <p>Subscribe to our newsletter and stay updated</p>
            <div className={styles.form}>
              <input type="email" placeholder='Your Email id'/>
              <button>Subscribe</button>
            </div>
        </div>
    </>
    
  )
}

export default NewsLetter;
