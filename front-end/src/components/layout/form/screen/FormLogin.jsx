import Input from "../input/Input";
import Button from "../button/Button";
import styles from './FormLogin.module.css'
import { Link } from "react-router-dom";


const FormLogin = ({ handleSubmit, btnText }) => {
    return (
        <div>
            <form onSubmit={handleSubmit} className={styles.form}>
                <Input
                    type="email"
                    text="Email"
                    name="email"
                    placeholder="Exemplo@gmail.com"
                />
                <Link className={styles.link} to='/login'><p> Esqueceu a senha?</p></Link>
                <Input
                    type="password"
                    text="Senha"
                    name="password"
                    placeholder="Enter Password"
                />
                <Button text={btnText} />
                <Link className={styles.link} to='/register'>Cadastre-se</Link>
            </form>


        </div>
    );
}

export default FormLogin;