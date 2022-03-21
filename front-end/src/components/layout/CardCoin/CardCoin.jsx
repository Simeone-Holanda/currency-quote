import styles from './CardCoin.module.css'

const CardCoin = ({ coin1, coin2, handleValueCoin, CoinIcon }) => {
    return (
        <div className={styles.container_card_coin}>
            <div>
                <p>{coin1} / {coin2}</p>
                <h1> <span>R$</span> 5,30</h1>
            </div>
            <div>
                <img src={CoinIcon} alt="" />
            </div>
        </div>
    );
}

export default CardCoin;