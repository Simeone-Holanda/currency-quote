import dolar_icon from '../../../img/dolar_icon.png'
import styles from './Row.module.css'

const Row = ({ positive }) => {
    return (
        <>
            <td className={styles.section_table_item}>
                <img src={dolar_icon} alt="" />
                <div className={styles.table_item_data}>
                    <p> Dolar Americano </p>
                    <span>10/03/2022</span>
                </div>
            </td>
            <td>
                {5.55285}
            </td>
            <td>
                {5.6894}
            </td>
            <td align='end' className={positive && styles[positive]}>
                <span>+ 1%</span>
            </td>
        </>
    );
}

export default Row;