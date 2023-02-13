import styles from '../../styles/Navbar.module.css';
export default function Navbar(){
    return<>
        <div className={styles.navbar}>
            <div className = {styles.menu} >
                <div className = {styles.logo}>Jitter</div>
                <div className = {styles.login}>Login</div>
            </div>
        </div>
    </>
}