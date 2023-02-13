import styles from '../../styles/Footer.module.css'
import SquareIcon from '../Icon/SquareIcon'
export default function Footer(){
    return<>
        <div className={styles.footer}>
           <div className={styles.bar}>
                <SquareIcon />
                <SquareIcon />
                <SquareIcon />
                <SquareIcon />
           </div>
        </div>
    </>
}