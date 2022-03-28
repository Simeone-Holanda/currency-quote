import styles from './Input.module.css'

function Input({ type, text, name, placeholder, handleOnChange }) {
    return (
        <div className={styles.form_login}>
            <label htmlFor={name}>{text}:</label> <br />
            <input
                type={type}
                name={name}
                onChange={handleOnChange}
                placeholder={placeholder}
            />
        </div>
    )
}

export default Input