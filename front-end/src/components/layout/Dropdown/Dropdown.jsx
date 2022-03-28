import styles from './Dropdown.module.css'

const Dropdown = ({ options, value, handleOnChange }) => {
    return (
        <div className={styles.cotainer_dropdown}>
            <select
                onChange={handleOnChange}
                value={value || ''}
            >
                {options.map((opt) => (
                    <option value={opt.id} key={opt}>
                        {opt}
                    </option>
                ))}
            </select>
        </div >

    );
}

export default Dropdown;