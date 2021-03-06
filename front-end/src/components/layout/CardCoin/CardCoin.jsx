import { useEffect, useState } from 'react';
import styles from './CardCoin.module.css'

const CardCoin = ({ coin1, coin2, CoinIcon, onChange, coinSymbol }) => {

    const [valueCoin, setValueCoin] = useState(0)

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/convetion/${coin1}-${coin2}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(data => data.json())
            .then(resp => {
                setValueCoin(resp['result'])
            })
            .catch(e => console.log(e))

    }, [onChange])

    return (
        <div className={styles.container_card_coin}>
            <div>
                <p>{coin1} / {coin2}</p>
                <h3> <span>{coinSymbol}</span> {valueCoin}</h3>
            </div>
            <div>
                <img src={CoinIcon} alt="" />
            </div>
        </div>
    );
}

export default CardCoin;