import styles from './Input.module.css'

function Input({ type, text, name, placeholder }) {
    return (
        <div className={styles.form_login}>
            <label htmlFor={name}>{text}:</label> <br />
            <input
                type={type}
                name={name}
                placeholder={placeholder}
            />
        </div>
    )
}

export default Input