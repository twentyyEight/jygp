import styles from './header.module.css'

export default function Header({ titulo, descripcion }) {
    return (
        <div className={styles.header}>
            <div>
                <h1>{titulo}</h1>
                <p>{descripcion}</p>
            </div>
        </div>
    )
}