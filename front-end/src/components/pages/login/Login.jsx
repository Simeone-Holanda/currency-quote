import NavTop from "../../layout/NavTop/NavTop";
import styles from './Login.module.css'
import ScreenLogin from '../../../img/ScreenLogin.png'
import FormLogin from "../../layout/form/screen/FormLogin";

const Login = () => {

    return (
        <>
            <div className={styles.container_login}>
                <div className={styles.container_login}>
                    <img src={ScreenLogin} alt="" />
                    <div className={styles.form}>
                        <div className={styles.container_infos}>
                            <h1> Olá! Bem vindo de volta</h1>
                            <p>Faça login com seus dados inseridos
                                durante o seu registro.
                            </p>
                        </div>
                        <FormLogin btnText="Login" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;