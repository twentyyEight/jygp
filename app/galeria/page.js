import Image from "next/image"
import styles from "./page.module.css"
import Header from "../components/Header/Header"

export default function Galeria() {
    return (
        <div className={styles.galeria}>
            <Header
                titulo={'Galería'}
                descripcion={'Explore nuestra galería y conozca los proyectos que hemos desarrollado, además de nuestra forma de trabajar en terreno'}
            />
        </div>
    )
}