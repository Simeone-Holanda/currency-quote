import styles from './Dashboard.module.css'
import load_icon from '../../../img/load_icon.png'
import CardCoin from '../../layout/CardCoin/CardCoin';
import dolar_icon from '../../../img/dolar_icon.png'
import btc_icon from '../../../img/btc_icon.png'
import TablePrice from '../../layout/TablePrice/TablePrice';
import button_icon from '../../../img/button_icon.png'
import Dropdown from '../../layout/Dropdown/Dropdown';
import { useState } from 'react';

const Dashboard = () => {

    const coins = ['Dolar Americano', 'Euro']
    const [coinSelected, setCoinSelected] = useState('')
    const [checkButton, setCheckButton] = useState(false)


    function updateCoins() {
        setCheckButton(!checkButton)
    }

    function handleCoin(e) {
        setCoinSelected(e.target.value)
    }

    return (

        //TODO: Criar um componente de messagem se der tempo
        <div className={styles.container_dashboard}>
            <header className={styles.container_header}>
                <h1> Moedas </h1>
                <button onClick={updateCoins}><img src={load_icon} alt="" /></button>
            </header>
            <section>
                <div className={styles.container_cards}>
                    <CardCoin coin1="BRL" coin2="USD" CoinIcon={dolar_icon} onChange={checkButton} />
                    <CardCoin coin1="BTC" coin2="EUR" CoinIcon={btc_icon} onChange={checkButton} />
                    <CardCoin coin1="BTC" coin2="USD" CoinIcon={btc_icon} onChange={checkButton} />
                </div>
                <div className={styles.select_coin_type}>
                    <h1> Cotações </h1>
                    <div><Dropdown
                        options={coins}
                        handleOnChange={handleCoin}
                        value={coinSelected}
                    /></div>

                </div>

                <TablePrice coin={coinSelected} />
            </section>

        </div>);
}

export default Dashboard;