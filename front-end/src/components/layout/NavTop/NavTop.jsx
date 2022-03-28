import styles from './NavTop.module.css'
import Logo_Beeteller from '../../../img/Logo_Beeteller.png'
import Vector from '../../../img/Vector.png'

const NavTop = () => {
    return (
        <div className={styles.container_nav}>
            <div className={styles.headers}>
                <div className={styles.logo}>
                    <img src={Logo_Beeteller} alt="" />
                </div>
                <span>COTAÇÕES</span>
                <img src={Vector} alt="" />
            </div>
            <div className={styles.idioma}>EN</div>

        </div >
    );
}

export default NavTop;