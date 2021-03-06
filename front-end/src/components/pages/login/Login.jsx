import styles from './Login.module.css'
import { useLocation } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import Message from "../../layout/Message/Message";
import ScreenLogin from '../../../img/ScreenLogin.png'
import FormLogin from "../../layout/form/screen/FormLogin";
import { useEffect, useState } from 'react';
import { i18n } from '../../../translate/i18n'


const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [message, setMessage] = useState('')
    const [type, setType] = useState('')


    useEffect(() => {
        if (location.state) {
            setMessage(location.state.message)
            setType(location.state.type)
            navigate('/')
        }
    }, [])

    function loginUser(dataLogin) {
        setMessage('')
        fetch('http://127.0.0.1:8000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataLogin)
        }).then(data => data.json())
            .then(resp => {
                if (resp.status == '202') {
                    navigate('/dashboard', { state: { authorized: true } })
                } else {
                    setMessage(resp.message)
                    setType('error')
                }

            })
    }

    return (
        <>
            {message && <Message type={type} msg={message} />}
            <div className={styles.container_login}>
                <div className={styles.container_login}>
                    <img src={ScreenLogin} alt="" />
                    <div className={styles.form}>
                        <div className={styles.container_infos}>
                            <h1>{i18n.t('titles.login')}</h1>
                            <p>{i18n.t('subtitles.login')}</p>
                        </div>
                        <FormLogin handleSubmit={loginUser} btnText="Login" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;