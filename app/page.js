import Image from "next/image";
import Link from "next/link";

import heroStyles from "./components/inicio/hero.module.css"
import nosotrosStyles from "./components/inicio/nosotros.module.css"
import serviciosStyles from "./components/inicio/servicios.module.css"
import galeriaStyles from "./components/inicio/galeria.module.css"
import contactoStyles from "./components/inicio/contacto.module.css"

import ServicioCard from "./components/ServicioCard/ServicioCard";
import servicios from '@/app/data/servicios.json'

const services = [servicios[8], servicios[9], servicios[2], servicios[3]]

export default function Home() {
    return (
        <main>
            {/* HERO */}
            <div className={heroStyles.banner}>
                <Image
                    src={'/images/inicio/hero/Banner.png'}
                    alt="Constructora JYGP"
                    loading="eager"
                    width={1254}
                    height={1254}
                />
                <div>
                    <h1>construyendo confianza, proyecto a proyecto</h1>
                    <p>Sea cual sea su proyecto, grande o pequeño, tenemos los servicios para hacerlo realidad</p>
                    <Link href={'/#contacto'}>Contáctenos</Link>
                </div>
            </div>

            {/* NOSOTROS */}
            <div id="nosotros" className={nosotrosStyles.nosotros}>
                <div>
                    <div className={nosotrosStyles.texto}>
                        <p className="subtitle">Sobre nosotros</p>
                        <h2>desde 2021 construyendo confianza y calidad</h2>
                        <p>JYGP Construcciones es una empresa dedicada a ofrecer soluciones integrales en el rubro de la construcción. Hemos tenido el privilegio de trabajar junto a clientes que han confiado en nosotros, permitiéndonos brindar soluciones eficaces, cumplimiento de plazos y optimización de costos en cada obra. Contamos con experiencia en una amplia gama de servicios respaldados por el compromiso y la dirección de Juan Tapia Levillan, Constructor Civil.</p>
                    </div>

                    <div className={nosotrosStyles.visuals}>
                        <div>
                            <Image
                                src={'/images/inicio/nosotros/reparacion-de-techumbre-trabajador-construccion.jpeg'}
                                alt="Trabajador reparando una techumbre"
                                width={900}
                                height={1600}
                                className={nosotrosStyles.img_square}
                            />
                            <div className={nosotrosStyles.proyectos}>
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
                            className={nosotrosStyles.img_rectangle}
                        />
                    </div>
                </div>
            </div>

            {/* SERVICIOS */}
            <div className={serviciosStyles.servicios}>
                <p className="subtitle">Nuestros servicios</p>
                <h2>todo lo que necesita, en un solo lugar</h2>

                <div className={serviciosStyles.cards}>
                    {services.map(service => (
                        <ServicioCard
                            key={service.titulo}
                            titulo={service.titulo}
                            descripcion={service.descripcion}
                            icono={service.icono}
                        />
                    ))}
                </div>

                <Link href={'/servicios'}>
                    Revisa más servicios aquí
                </Link>
            </div>

            {/* GALERIA */}
            {/* <div className={galeriaStyles.galeria}>
                <div className={galeriaStyles.first_row}>
                    <Image
                        src={'/images/inicio/galeria/01-instalacion-faena-obra-construccion.jpeg'}
                        alt="01 instalacion faena obra construccion"
                        width={800}
                        height={450}
                    />
                    <Image
                        src={'/images/inicio/galeria/02-nivelacion-compactacion-terreno-construccion.jpeg'}
                        alt="02 nivelacion compactacion terreno construccion"
                        width={800}
                        height={450}
                    />
                    <Image
                        src={'/images/inicio/galeria/03-reparacion-techumbre-tejas.jpeg'}
                        alt="03 reparacion techumbre tejas"
                        width={800}
                        height={450}
                    />
                </div>

                <div className={galeriaStyles.second_row}>
                    <Image
                        src={'/images/inicio/galeria/04-instalacion-tabiqueria-yeso-carton.jpeg'}
                        alt="04 instalacion tabiqueria yeso carton"
                        width={1000}
                        height={800}
                        className={`${galeriaStyles.square}`}
                        style={{ flexGrow: 1 }}
                    />
                    <Image
                        src={'/images/inicio/galeria/05-soldadura-estructura-metalica-construccion.jpeg'}
                        alt="05 soldadura estructura metalica construccion"
                        width={450}
                        height={800}
                        className={`${galeriaStyles.square}`}
                        style={{ flexGrow: 1 }}
                    />
                    <Image
                        src={'/images/inicio/galeria/06-carpinteria-moldaje-construccion-cubierta.jpeg'}
                        alt="06 carpinteria moldaje construccion cubierta"
                        width={800}
                        height={450}
                        style={{ flexGrow: 800 / 450 }}
                    />
                    <Image
                        src={'/images/inicio/galeria/07-trazado-replanteo-terreno-construccion.jpeg'}
                        alt="07 trazado replanteo terreno construccion"
                        width={450}
                        height={800}
                        className={`${galeriaStyles.square}`}
                        style={{ flexGrow: 1 }}
                    />
                </div>

                <div className={galeriaStyles.thrid_row}>
                    <Image
                        src={'/images/inicio/galeria/08-limpieza-y-mantencion-de-superficies.jpeg'}
                        alt="08 limpieza y mantencion de superficies"
                        width={450}
                        height={800}
                    />
                    <Image
                        src={'/images/inicio/galeria/09-excavacion-maquinaria.jpeg'}
                        alt="09 excavacion maquinaria"
                        width={450}
                        height={800}
                        className={`${galeriaStyles.square}`}
                    />
                    <Image
                        src={'/images/inicio/galeria/10-retiro-y-transporte-de-escombros.jpeg'}
                        alt="10 retiro y transporte de escombros"
                        width={800}
                        height={450}
                    />
                </div>
            </div> */}

            {/* CONTACTO */}
            <div className={contactoStyles.contacto}>
                <Image
                    src={'/images/inicio/contacto/instalacion-aislacion-termica-muros.jpeg'}
                    alt="Instalación aislación termica muros"
                    width={1600}
                    height={900}
                />
                <div className={contactoStyles.overlay}></div>
                <div className={contactoStyles.content}>
                    <p className="subtitle">¿Tiene un proyecto en mente?</p>
                    <h2>contáctenos</h2>
                    <p>Escríbanos a nuestros WhatsApp y reciba una cotización rápida y sin compromiso</p>
                    <Link href={'/'}>
                        <Image
                            src={'/icons/whatsapp.svg'}
                            alt="whatsapp"
                            width={50}
                            height={50}
                            className="icons"
                        />
                        <span>Enviar mensaje</span>
                    </Link>
                </div>
            </div>
        </main>
    );
}
