import styles from './Dashboard.module.css';
import btc_icon from '../../../img/btc_icon.png';
import load_icon from '../../../img/load_icon.png';
import dolar_icon from '../../../img/dolar_icon.png';
import Dropdown from '../../layout/Dropdown/Dropdown';
import CardCoin from '../../layout/CardCoin/CardCoin';
import TablePrice from '../../layout/TablePrice/TablePrice';
import Loading from '../../layout/Load/Loading';
import { i18n } from '../../../translate/i18n'
import { AiOutlineLogout } from 'react-icons/ai';

import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Dashboard = () => {

    const coins = ['Dolar Americano', 'Euro']
    const navigate = useNavigate()
    const location = useLocation();
    const [coinSelected, setCoinSelected] = useState('')
    const [checkButton, setCheckButton] = useState(true)

    useEffect(() => {
        if (!location.state) {
            navigate('/login', { state: { message: 'Faça login para acessar o dashboard', type: 'error' } })
        }
    }, [])

    function updateCoins() {
        setCheckButton(false)
        setTimeout(() => { setCheckButton(true) }, 1000)
        console.log(checkButton)
    }

    function handleLogOut() {
        fetch('http://127.0.0.1:8000/auth/logout', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(data => data.json())
            .then(resp => {
                if (resp.status == '200') {
                    navigate('/login', { state: { message: 'Volte sempre!', type: 'success' } })
                }
            })
    }

    function handleCoin(e) {
        setCoinSelected(e.target.value)
    }

    return (
        <>
            <div className={styles.container_dashboard}>
                <header className={styles.container_header}>
                    <h3> {i18n.t('dashboard.coins')}</h3>
                    <div>
                        <button onClick={updateCoins}><img src={load_icon} alt="" /></button>

                    </div>
                    <div>
                        <div className={styles.customBtLogout} onClick={handleLogOut}><AiOutlineLogout /></div>
                    </div>

                </header>
                <section>
                    <div>
                        {checkButton ? (
                            <div className={styles.container_cards}>
                                <CardCoin coin1="BRL" coin2="USD" CoinIcon={dolar_icon} onChange={checkButton} coinSymbol='R$' />
                                <CardCoin coin1="BTC" coin2="EUR" CoinIcon={btc_icon} onChange={checkButton} coinSymbol='฿' />
                                <CardCoin coin1="BTC" coin2="USD" CoinIcon={btc_icon} onChange={checkButton} coinSymbol='฿' />
                            </div>
                        ) : (<Loading />)}

                    </div>
                    <div className={styles.select_coin_type}>
                        <h3> {i18n.t('dashboard.quotation')}</h3>
                        <div>
                            <Dropdown
                                options={coins}
                                handleOnChange={handleCoin}
                                value={coinSelected}
                            /></div>

                    </div>

                    <TablePrice coin={coinSelected} />
                </section>
            </div >
        </>);
}

export default Dashboard;