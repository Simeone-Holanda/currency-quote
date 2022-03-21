import styles from './Dashboard.module.css'
import load_icon from '../../../img/load_icon.png'
import CardCoin from '../../layout/CardCoin/CardCoin';
import dolar_icon from '../../../img/dolar_icon.png'
import btc_icon from '../../../img/btc_icon.png'
import TablePrice from '../../layout/TablePrice/TablePrice';
import button_icon from '../../../img/button_icon.png'

const Dashboard = () => {
    return (
        <div className={styles.container_dashboard}>
            <header className={styles.container_header}>
                <h1> Moedas </h1>
                <img src={load_icon} alt="" />
            </header>
            <section>
                <div className={styles.container_cards}>
                    <CardCoin coin1="BRL" coin2="USD" CoinIcon={dolar_icon} />
                    <CardCoin coin1="BTC" coin2="EUR" CoinIcon={btc_icon} />
                    <CardCoin coin1="BTC" coin2="USD" CoinIcon={btc_icon} />
                </div>
                <div className={styles.select_coin_type}>
                    <h1> Cotações </h1>
                    <div><button><img src={button_icon} alt="" /></button></div>

                </div>

                <TablePrice />
            </section>

        </div>);
}

export default Dashboard;