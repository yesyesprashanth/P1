import styles from '../../styles/Favorite.module.css';
import CircularIcon from '../Icon/CircularIcon';
export default function Favorite(){
    return<>
    <div className={styles.container}>
        <h2 className = {styles.heading}>Favorite</h2>
        <div className = {styles.favoritelist}>
            <CircularIcon />
            <CircularIcon />
            <CircularIcon />
            <CircularIcon />
            <CircularIcon />
            <CircularIcon />
            <CircularIcon />
            <CircularIcon />
        </div>
    </div>
    </>
}