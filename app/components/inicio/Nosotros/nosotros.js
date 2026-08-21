import Image from "next/image";
import styles from './nosotros.module.css'

export default function Nosotros() {
    return (
        <div id="nosotros" className={styles.nosotros}>
            <div>
                <div className={styles.texto}>
                    <h3>Sobre nosotros</h3>
                    <h2>desde 2021 construyendo confianza y calidad</h2>
                    <p>JYGP Construcciones es una empresa dedicada a ofrecer soluciones integrales en el rubro de la construcción. Hemos tenido el privilegio de trabajar junto a clientes que han confiado en nosotros, permitiéndonos brindar soluciones eficaces, cumplimiento de plazos y optimización de costos en cada obra. Contamos con experiencia en una amplia gama de servicios respaldados por el compromiso y la dirección de Juan Tapia Levillan, Constructor Civil.</p>
                </div>

                <div className={styles.visuals}>
                    <div>
                        <Image
                            src={'/images/inicio/nosotros/reparacion-de-techumbre-trabajador-construccion.jpeg'}
                            alt="Trabajador reparando una techumbre"
                            width={900}
                            height={1600}
                            className={styles.img_square}
                        />
                        <div className={styles.proyectos}>
                            <div></div>
                            <p>+100</p>
                            <p>proyectos <br /> completados</p>
                        </div>
                    </div>
                    <Image
                        src={'/images/inicio/nosotros/armado-acero-refuerzo-construccion.jpeg'}
                        alt="Armado de acero para refuerzo de construcción"
                        width={720}
                        height={1280}
                        className={styles.img_rectangle}
                    />
                </div>
            </div>
        </div>
    )
}