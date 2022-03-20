import NavTop from "../../layout/NavTop/NavTop";
import styles from '../login/Login.module.css';
import ScreenLogin from '../../../img/ScreenLogin.png';
import FormRegister from "../../layout/form/screen/FormRegister";

const Register = () => {
    return (
        <>
            <div>
                <div className={styles.container_login}>
                    <img src={ScreenLogin} alt="" />
                    <div className={styles.form}>
                        <div className={styles.container_infos}>
                            <h1> Olá! Cadastra-se </h1>
                            <p>Preencha os dados abaixo para concluir o cadastro.
                            </p>
                        </div>
                        <FormRegister btnText="Cadastre-se" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;