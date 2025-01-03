
import styles from './DescriptionBox.module.css';

function DescriptionBox() {
  return (
    <>
        <div className={styles.descriptionBox_container}>
            <div className={styles.descriptionBox_navigator}>
                <div className={styles.descriptionBox_nav_box}>
                    Description
                </div>
                <div className={styles.descriptionBox_nav_box_fade}>
                    Reviews (122)
                </div>
            </div>
            <div className={styles.descriptionBox_description}>
                <p>Elegant and sophisticated, this piece features a stunning color design, perfect for any occasion.</p>
                <p>Stay stylish with our piece, crafted from this fabric for ultimate comfort.</p>
            </div>
        </div>
    </>
  )
}

export default DescriptionBox;
