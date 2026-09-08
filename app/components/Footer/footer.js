import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <Image
                    src={'/images/jypg-constructora-logo-blanco.png'}
                    alt='JYGP Constructora logo'
                    width={500}
                    height={166}
                    className={styles.logo}
                />

                <div className={styles.info}>
                    <div>
                        <Image
                            src={'/icons/ubicacion.svg'}
                            alt='ubicacion'
                            width={50}
                            height={50}
                            className='icons'
                        />
                        <p>Andes #1624, La Florida - Santiago</p>
                    </div>
                    <div>
                        <Image
                            src={'/icons/telefono.svg'}
                            alt='telefono'
                            width={50}
                            height={50}
                            className='icons'
                        />
                        <Link href={'tel:+56955256617'}>9 5525 6617</Link>
                    </div>

                    <div>
                        <Image
                            src={'/icons/telefono.svg'}
                            alt='telefono'
                            width={50}
                            height={50}
                            className='icons'
                        />
                        <Link href={'tel:+56966346352'}>9 6634 6352</Link>
                    </div>

                    <div>
                        <Image
                            src={'/icons/correo.svg'}
                            alt='email'
                            width={50}
                            height={50}
                            className='icons'
                        />
                        <Link href={'mailto:jygpconstrucciones@gmail.com'}>jygpconstrucciones@gmail.com</Link>
                    </div>
                </div>
            </div>

            <p className={styles.credits}>Página desarrollada por Paloma Cabrillana</p>
        </footer>
    )
}