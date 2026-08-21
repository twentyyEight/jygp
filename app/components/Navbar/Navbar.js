"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css"

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={styles.nav}>
            <Image
                src={'/images/jypg-constructora-logo.png'}
                alt="JYGP Constructora logo"
                width={2000}
                height={664}
                className={styles.logo}
                loading="eager"
            />

            <button
                type="button"
                onClick={() => setIsOpen(true)}
                aria-label="Abrir menú"
                aria-expanded={true}
            >
                <Image
                    src="/icons/menu.svg"
                    alt="menu"
                    width={800}
                    height={800}
                    className={styles.menu}
                />
            </button>

            {/* Mobile */}
            <div className={`${styles.overlay} ${isOpen ? '' : styles.hidden}`}>
                <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    aria-label="Cerrar menú"
                    aria-expanded={false}
                >
                    <Image
                        src="/icons/close.svg"
                        alt="close"
                        width={32}
                        height={32}
                        className={`${styles.close_overlay} icons`}
                    />
                </button>
                <ul>
                    <li>
                        <Link href="/">INICIO</Link>
                    </li>
                    <li>
                        <Link href="/#nosotros">NOSOTROS</Link>
                    </li>
                    <li>
                        <Link href="/servicios">SERVICIOS</Link>
                    </li>
                    <li>
                        <Link href="/galeria">GALERÍA</Link>
                    </li>
                    <li>
                        <Link href="/#contacto">CONTACTO</Link>
                    </li>
                </ul>
                <Image
                    src={'/images/jypg-constructora-logo-blanco.png'}
                    alt="JYGP Constructora logo"
                    width={2000}
                    height={664}
                    loading="eager"
                    className={styles.logo_overlay}
                />
            </div>

            <ul className={styles.links}>
                <li>
                    <Link href="/">INICIO</Link>
                </li>
                <li>
                    <Link href="/#nosotros">NOSOTROS</Link>
                </li>
                <li>
                    <Link href="/servicios">SERVICIOS</Link>
                </li>
                <li>
                    <Link href="/galeria">GALERÍA</Link>
                </li>
                <li>
                    <Link href="/#contacto">CONTACTO</Link>
                </li>
            </ul>
        </nav>
    )
}