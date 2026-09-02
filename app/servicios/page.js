import styles from "./page.module.css"

import ServicioCard from "../components/ServicioCard/ServicioCard"
import Header from "../components/Header/Header"

import servicios from "../data/servicios.json"

export default function Servicios() {
    return (
        <>
            <Header titulo={'Nuestros servicios'} />
            <div className={styles.cards}>
                {servicios.map(servicio => (
                    <ServicioCard 
                        key={servicio.titulo}
                        titulo={servicio.titulo}
                        descripcion={servicio.descripcion}
                        icono={servicio.icono}
                    />
                ))}
            </div>
        </>
    )
}