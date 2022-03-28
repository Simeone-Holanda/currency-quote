import styles from './Dashboard.module.css';
import btc_icon from '../../../img/btc_icon.png';
import load_icon from '../../../img/load_icon.png';
import dolar_icon from '../../../img/dolar_icon.png';
import Dropdown from '../../layout/Dropdown/Dropdown';
import CardCoin from '../../layout/CardCoin/CardCoin';
import TablePrice from '../../layout/TablePrice/TablePrice';
import { useState } from 'react';
import Loading from '../../layout/Load/Loading';

const Dashboard = () => {

    const coins = ['Dolar Americano', 'Euro']
    const [coinSelected, setCoinSelected] = useState('')
    const [checkButton, setCheckButton] = useState(true)


    function updateCoins() {
        setCheckButton(false)
        setTimeout(() => { setCheckButton(true) }, 1000)
        console.log(checkButton)
    }

    function handleCoin(e) {
        setCoinSelected(e.target.value)
    }

    return (
        <>
            <div className={styles.container_dashboard}>
                <header className={styles.container_header}>
                    <h3> Moedas </h3>
                    <button onClick={updateCoins}><img src={load_icon} alt="" /></button>
                </header>
                <section>
                    <div>git
                        {checkButton ? (
                            <div className={styles.container_cards}>
                                <CardCoin coin1="BRL" coin2="USD" CoinIcon={dolar_icon} onChange={checkButton} />
                                <CardCoin coin1="BTC" coin2="EUR" CoinIcon={btc_icon} onChange={checkButton} />
                                <CardCoin coin1="BTC" coin2="USD" CoinIcon={btc_icon} onChange={checkButton} />
                            </div>
                        ) : (<Loading />)}

                    </div>
                    <div className={styles.select_coin_type}>
                        <h3> Cotações </h3>
                        <div>
                            <Dropdown
                                options={coins}
                                handleOnChange={handleCoin}
                                value={coinSelected}
                            /></div>

                    </div>


                    <TablePrice coin={coinSelected} />
                </section>
            </div>
        </>);
}

export default Dashboard;