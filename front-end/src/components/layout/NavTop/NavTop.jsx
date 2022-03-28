import styles from './NavTop.module.css'
import Logo_Beeteller from '../../../img/Logo_Beeteller.png'
import Vector from '../../../img/Vector.png'
import { useState } from 'react'


const I18N_STORAGE_KEY = 'i18nextLng'

const NavTop = () => {

    const [language] = useState(localStorage.getItem(I18N_STORAGE_KEY))

    const handleSelectChange = event => {
        localStorage.setItem(
            I18N_STORAGE_KEY,
            event.target.value
        )
        window.location = window.location
    }


    return (
        <div className={styles.container_nav}>
            <div className={styles.headers}>
                <div className={styles.logo}>
                    <img src={Logo_Beeteller} alt="" />
                </div>
                <span>COTAÇÕES</span>
                <img src={Vector} alt="" />
            </div>
            <div className={styles.idioma}>
                <select className={styles.customDropdown} onChange={handleSelectChange} value={language}>
                    <option value="pt-BR">PT</option>
                    <option value="en-US">EN</option>

                </select>
            </div>

        </div >
    );
}

export default NavTop;