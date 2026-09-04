"use client"
import { useEffect, useState } from 'react'
import Image from "next/image"
import styles from "./photos.box.module.css"

export default function PhotosBox({ title, img, children }) {

    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {

        const actualizarPosicion = () => {

            if (window.innerWidth >= 768) {
                setIsOpen(true)
            } else {
                setIsOpen(false)
            }
        }

        actualizarPosicion()

        window.addEventListener('resize', actualizarPosicion)

        return () => {
            window.removeEventListener('resize', actualizarPosicion)
        }

    }, [])

    useEffect(() => {
        
        if (isOpen && window.innerWidth < 768) document.body.classList.toggle('overflow-hidden', isOpen)

        return () => document.body.classList.remove('overflow-hidden')
    }, [isOpen])

    return (
        <div className={styles.box}>

            <h2>{title}</h2>

            <div className={`${styles.front}`}>
                <Image
                    src={`/images/galeria/${img}.jpeg`}
                    alt={img.split("/").pop().replaceAll("-", " ")}
                    width={854}
                    height={480}
                />
                <button onClick={() => setIsOpen(true)}>
                    Ver más imágenes
                    <span>+</span>
                </button>
            </div>


            {isOpen &&
                <div className={`${styles.modal}`}>
                    <button onClick={() => setIsOpen(false)}>
                        Cerrar
                        <Image
                            src={'/icons/close.svg'}
                            alt='Cerrar modal'
                            width={50} height={50}
                        />
                    </button>
                    {children}
                </div>
            }
        </div>
    )
}