import Image from "next/image";
import Link from "next/link";
import styles from "./hero.module.css"

export default function Hero() {
    return (
        <div className={styles.banner}>
            <Image
                src={'/images/inicio/hero/Banner.png'}
                alt="Constructora JYGP"
                width={1254}
                height={1254}
            />
            <div>
                <h1>construyendo confianza, proyecto a proyecto</h1>
                <p>Sea cual sea su proyecto, grande o pequeño, tenemos los servicios para hacerlo realidad</p>
                <Link href={'/#'}>Contáctenos</Link>
            </div>
        </div>
    )
}