import styles from '../login/Login.module.css';
import { useNavigate } from 'react-router-dom';
import ScreenLogin from '../../../img/ScreenLogin.png';
import FormRegister from "../../layout/form/screen/FormRegister";
import { useState } from 'react';
import Message from '../../layout/Message/Message';
import { i18n } from '../../../translate/i18n'
const Register = () => {
    const navigate = useNavigate()
    const [message, setMessage] = useState('')

    const API_HOST = 'http://localhost:8000/auth/register/';

    function createUser(dataUser) {
        setMessage('')
        const response = fetch(`${API_HOST}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataUser)
        }).then(data => data.json())
            .then(resp => {
                if (resp['status'] == 400) {
                    setMessage(resp['message'])
                } else {
                    resp['type'] = 'success'
                    navigate('/login', { state: resp })
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            {message && <Message type='error' msg={message} />}
            <div className={styles.container_login}>
                <div className={styles.container_login}>
                    <img src={ScreenLogin} alt="" />
                    <div className={styles.form}>
                        <div className={styles.container_infos}>
                            <h1>{i18n.t('titles.register')}</h1>
                            <p>{i18n.t('subtitles.register')}</p>
                        </div>
                        <FormRegister handleSubmit={createUser} btnText="Cadastre-se" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;