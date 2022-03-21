import Row from './Row';
import button_icon from '../../../img/button_icon.png'
import styles from './TablePrice.module.css'


const TablePrice = () => {

    function reverseLines() {
        console.log('inverte ')
    }


    return (
        <table>
            <tr>
                <td width="40%">Moeda <button onClick={reverseLines}><img src={button_icon} alt="" /></button></td>
                <td width="10%">Minima <button onClick={reverseLines}><img src={button_icon} alt="" /></button> </td>
                <td width="10%">Maxima <button onClick={reverseLines}><img src={button_icon} alt="" /></button></td>
                <td width="40%" align='end'>Variação <button onClick={reverseLines}><img src={button_icon} alt="" /></button></td>
            </tr>
            <tr><Row positive='positive' /></tr>
            <tr><Row id_row='Um' /></tr>
            <tr><Row id_row='Um' /></tr>
            <tr><Row id_row='Um' /></tr>
            <tr><Row id_row='Um' /></tr>
            <tr><Row id_row='Um' /></tr>

        </table>
    );
}

export default TablePrice;