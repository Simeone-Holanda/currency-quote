import button_icon from '../../../img/button_icon.png'
import styles from './TablePrice.module.css'
import { useEffect, useState } from 'react';
import dolar_icon from '../../../img/dolar_icon.png'


const TablePrice = ({ coin }) => {

    const [quotes, setQuotes] = useState([])

    function reverseLines() {
        const newQuotation = quotes
        newQuotation[0]['data'].reverse()
        setQuotes([])
        setInterval(() => {
            setQuotes(newQuotation)
            //TODO:ADICIONAR COMPONENTE DE LOAD SE DER TEMPO
        }, 1000)

    }

    useEffect(() => {
        setQuotes([])
        console.log(coin)
        console.log('testando')
        let url = ''
        if (coin === 'Dolar Americano' || coin === '') {
            url = 'http://127.0.0.1:8000/cotacoes/USD/20'
        } else {
            url = 'http://127.0.0.1:8000/cotacoes/EUR/20'
        }

        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(data => data.json())
            .then(resp => {
                const newQuotes = [resp]
                console.log('-=-=-')
                console.log(resp)
                console.log(newQuotes)
                console.log('-=-=-')
                setQuotes(newQuotes)
            })
            .catch(e => console.log(e))
    }, [coin])
    // TODO: A FORMA DE PASSAR O NOME DA COTAÇÃO PARA O SITE 
    // TODO: COLOCAR EM ALGUM CANTO O DIA QUE FOI PEGO ESSES DADOS
    return (
        <table>
            <tbody>
                <tr key="1" className={styles.custonButon}>
                    <td width="40%">Moeda <button onClick={reverseLines}><img src={button_icon} alt="" /></button></td>
                    <td width="10%">Minima <button onClick={reverseLines}><img src={button_icon} alt="" /></button> </td>
                    <td width="10%">Maxima <button onClick={reverseLines}><img src={button_icon} alt="" /></button></td>
                    <td width="40%" align='end'>Variação <button onClick={reverseLines}><img src={button_icon} alt="" /></button></td>
                </tr>

                {quotes.length > 0 ? quotes[0]['data'].map((quote) => (
                    <tr key={quotes[0]['data'].indexOf(quote)}>
                        <td className={styles.section_table_item}>
                            <img src={dolar_icon} alt="" />
                            <div className={styles.table_item_data}>
                                <p> {quotes[0]['name_quotation']}</p>
                                <span>Ultimos 10 dias</span>
                            </div>
                        </td>
                        <td>
                            {quote['low']}
                        </td>
                        <td>
                            {quote['high']}
                        </td>
                        <td className={quote['varBid'] > 0 ? `${styles.positive}` : ''} align='end'>
                            <span>{quote['varBid'] > 0 ? `+${quote['varBid']}` : quote['varBid']}%</span>
                        </td>
                    </tr>
                )
                ) : <tr key='no-key'><td></td></tr>
                }
            </tbody>
        </table >
    );
}

export default TablePrice;