import Input from "../input/Input";
import Button from "../button/Button";
import styles from './FormLogin.module.css'
import { Link } from "react-router-dom";
import { useState } from "react";
import { i18n } from '../../../../translate/i18n'

const FormLogin = ({ handleSubmit, btnText }) => {

    const [dataUser, setDataUser] = useState({})

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(dataUser)
    }

    function handleOnChange(e) {
        setDataUser({ ...dataUser, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <form onSubmit={submit} className={styles.form}>
                <Input
                    type="email"
                    text={i18n.t('inputs.email')}
                    name="email"
                    handleOnChange={handleOnChange}
                    placeholder="Exemplo@gmail.com"
                />
                <Link className={styles.link} to='/login'><p>{i18n.t('navigationPageLink.forgot_password')}</p></Link>
                <Input
                    type="password"
                    text={i18n.t('inputs.password')}
                    name="password1"
                    handleOnChange={handleOnChange}
                    placeholder="Enter Password"
                />

                <Button text={i18n.t('buttons.login')} />

            </form>
            <div>
                <nav className={styles.nav}>
                    <Link className={styles.link} to='/register'>{i18n.t('navigationPageLink.login')}</Link>
                </nav>
            </div>

        </div >
    );
}

export default FormLogin;