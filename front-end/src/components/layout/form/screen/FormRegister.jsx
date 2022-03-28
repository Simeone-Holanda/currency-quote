import Input from "../input/Input";
import Button from "../button/Button";
import styles from './FormLogin.module.css';
import { Link } from "react-router-dom";
import { useState } from "react";
import { i18n } from '../../../../translate/i18n'

const FormRegister = ({ handleSubmit, btnText }) => {

    const [dataUser, setDataUser] = useState({})

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(dataUser)
    }

    function handleOnChange(e) {
        setDataUser({ ...dataUser, [e.target.name]: e.target.value })
    }
    return (
        <>
            <form onSubmit={submit} className={styles.form}>
                <Input
                    type="text"
                    text={i18n.t('inputs.name')}
                    name="username"
                    handleOnChange={handleOnChange}
                    placeholder="Digite um nome de usuário"
                />
                <Input
                    type="email"
                    text={i18n.t('inputs.email')}
                    name="email"
                    handleOnChange={handleOnChange}
                    placeholder="Exemplo@gmail.com"
                />
                <Input
                    type="password"
                    text={i18n.t('inputs.password')}
                    name="password"
                    handleOnChange={handleOnChange}
                    placeholder="Enter Password"
                />
                <Input
                    type="password"
                    text={i18n.t('inputs.password_again')}
                    name="password2"
                    handleOnChange={handleOnChange}
                    placeholder="Enter Password again"
                />
                <Button text={i18n.t('buttons.register')} />
                <Link className={styles.link} to='/login'>{i18n.t('navigationPageLink.register')}</Link>

            </form>
        </>
    );
}

export default FormRegister;