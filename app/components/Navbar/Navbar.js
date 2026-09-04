"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from 'next/navigation'
import styles from "./navbar.module.css"

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const router = useRouter();
    const pathname = usePathname()

    useEffect(() => {
        document.body.classList.toggle('overflow-hidden', isOpen)

        return () => document.body.classList.remove('overflow-hidden')
    }, [isOpen])

    const cerrarMenu = () => {
        setTimeout(() => {
            setIsOpen(false)
        }, 300)
    }

    const goToSection = (id) => {
        if (pathname === '/') {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
        } else {
            sessionStorage.setItem('scrollTarget', id)
            router.push('/')
        }
    }

    return (
        <nav className={styles.nav}>
            <Link href={'/'}>
                <Image
                    src={'/images/jypg-constructora-logo.png'}
                    alt="JYGP Constructora logo"
                    width={2000}
                    height={664}
                    className={styles.logo}
                    loading="eager"
                />
            </Link>

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
                    <li onClick={cerrarMenu}>
                        <Link href="/">INICIO</Link>
                    </li>
                    <li onClick={() => {
                        cerrarMenu()
                        goToSection('nosotros')
                    }}>
                        NOSOTROS
                    </li>
                    <li onClick={cerrarMenu}>
                        <Link href="/servicios">SERVICIOS</Link>
                    </li>
                    <li onClick={cerrarMenu}>
                        <Link href="/galeria">GALERÍA</Link>
                    </li>
                    <li onClick={() => {
                        cerrarMenu()
                        goToSection('contacto')
                    }}>
                        CONTACTO
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
                <li onClick={() => goToSection('nosotros')}>
                    NOSOTROS
                </li>
                <li>
                    <Link href="/servicios">SERVICIOS</Link>
                </li>
                <li>
                    <Link href="/galeria">GALERÍA</Link>
                </li>
                <li onClick={() =>  goToSection('contacto')}>
                    CONTACTO
                </li>
            </ul>
        </nav>
    )
}