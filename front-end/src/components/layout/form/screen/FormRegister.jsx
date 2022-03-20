import Input from "../input/Input";
import Button from "../button/Button";
import styles from './FormLogin.module.css';
import { Link } from "react-router-dom";

const FormRegister = ({ handleSubmit, btnText }) => {
    return (
        <>
            <form onSubmit={handleSubmit} className={styles.form}>
                <Input
                    type="text"
                    text="Nome de usuário"
                    name="name"
                    placeholder="Digite um nome de usuário"
                />
                <Input
                    type="email"
                    text="Email"
                    name="email"
                    placeholder="Exemplo@gmail.com"
                />
                <Input
                    type="password"
                    text="Senha"
                    name="password"
                    placeholder="Enter Password"
                />
                <Button text={btnText} />
                <Link className={styles.link} to='/login'>Já possuo uma conta</Link>

            </form>
        </>
    );
}

export default FormRegister;