import styles from '../login/Login.module.css';
import { useNavigate } from 'react-router-dom';
import ScreenLogin from '../../../img/ScreenLogin.png';
import FormRegister from "../../layout/form/screen/FormRegister";

const Register = () => {
    const navigate = useNavigate()

    const API_HOST = 'http://localhost:8000/auth/register/';

    function createUser(dataUser) {
        // TODO: Fazer o tratamento de respostas da api e mostrar mensagens com base neles
        const response = fetch(`${API_HOST}auth/`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataUser)
        }).then(data => data.json())
            .then(resp => {
                navigate('/login', { state: resp })
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <div className={styles.container_login}>
                <div className={styles.container_login}>
                    <img src={ScreenLogin} alt="" />
                    <div className={styles.form}>
                        <div className={styles.container_infos}>
                            <h1> Olá! Cadastra-se </h1>
                            <p>Preencha os dados abaixo para concluir o cadastro.
                            </p>
                        </div>
                        <FormRegister handleSubmit={createUser} btnText="Cadastre-se" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;