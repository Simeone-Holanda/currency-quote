import Input from "../input/Input";
import Button from "../button/Button";
import styles from './FormLogin.module.css';
import { Link } from "react-router-dom";
import { useState } from "react";


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
                    text="Nome de usuário"
                    name="username"
                    handleOnChange={handleOnChange}
                    placeholder="Digite um nome de usuário"
                />
                <Input
                    type="email"
                    text="Email"
                    name="email"
                    handleOnChange={handleOnChange}
                    placeholder="Exemplo@gmail.com"
                />
                <Input
                    type="password"
                    text="Senha"
                    name="password"
                    handleOnChange={handleOnChange}
                    placeholder="Enter Password"
                />
                <Input
                    type="password"
                    text="Senha novamente"
                    name="password2"
                    handleOnChange={handleOnChange}
                    placeholder="Enter Password again"
                />
                <Button text={btnText} />
                <Link className={styles.link} to='/login'>Já possuo uma conta</Link>

            </form>
        </>
    );
}

export default FormRegister;