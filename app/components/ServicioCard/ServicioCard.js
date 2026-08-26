"use client"
import Image from "next/image"
import styles from "./servicio.card.module.css"
import { useState } from "react"

export default function ServicioCard({ titulo, descripcion, icono }) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={`${styles.card} ${isOpen ? styles.open : ''}`}>

            <div className={styles.portada}>
                <h3>{titulo}</h3>

                <Image
                    src={`/icons/servicios/${icono}`}
                    alt={titulo}
                    width={512}
                    height={512}
                    className={`icons ${styles.icon}`}
                />
            </div>

            <div className={styles.descripcion}>
                <p>{descripcion}</p>
            </div>

            <div className={styles.button}>
                <button 
                onClick={() => setIsOpen(!isOpen)}>
                    <span>{isOpen ? 'Cerrar' : 'Más detalles'}</span>
                    <Image
                        src={`/icons/close.svg`}
                        alt={titulo}
                        width={512}
                        height={512}
                        className={`icons ${isOpen ? styles.rotado : ''}`}
                    />
                </button>
            </div>
        </div>
    )
}