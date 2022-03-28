import Input from "../input/Input";
import Button from "../button/Button";
import styles from './FormLogin.module.css'
import { Link } from "react-router-dom";
import { useState } from "react";

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
                    text="Email"
                    name="email"
                    handleOnChange={handleOnChange}
                    placeholder="Exemplo@gmail.com"
                />
                <Link className={styles.link} to='/login'><p> Esqueceu a senha?</p></Link>
                <Input
                    type="password"
                    text="Senha"
                    name="password1"
                    handleOnChange={handleOnChange}
                    placeholder="Enter Password"
                />

                <Button text={btnText} />

            </form>
            <div>
                <nav className={styles.nav}>
                    <Link className={styles.link} to='/register'>Cadastre-se</Link>
                </nav>
            </div>

        </div >
    );
}

export default FormLogin;