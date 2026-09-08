"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from 'react'

import hero from "./styles/home/hero.module.css"
import nosotros from "./styles/home/nosotros.module.css"
import servicios from "./styles/home/servicios.module.css"
import galeria from "./styles/home/galeria.module.css"
import contacto from "./styles/home/contacto.module.css"
import proveedores from "./styles/home/proveedores.module.css"
import moreBtnStyles from "./styles/home/more.btn.module.css"
import titles from "./styles/home/titles.module.css"

import ServicioCard from "./components/ServicioCard/ServicioCard";
import services from '@/app/data/servicios.json'

export default function Home() {

    const squareImgRef = useRef(null)
    const rectangleImgRef = useRef(null)

    useEffect(() => {
        function updateSizes() {

            if (squareImgRef.current && rectangleImgRef.current) {

                const top = squareImgRef.current.getBoundingClientRect().top
                const bottom = rectangleImgRef.current.getBoundingClientRect().bottom
                const altura = bottom - top
                document.documentElement.style.setProperty('--height-imgs', `${altura}px`)


                const square_width = squareImgRef.current.getBoundingClientRect().width
                document.documentElement.style.setProperty('--width-img_square', `${square_width}px`)
            }
        }

        updateSizes()

        window.addEventListener('resize', updateSizes)
        return () => window.removeEventListener('resize', updateSizes)
    }, [])

    useEffect(() => {
        const target = sessionStorage.getItem('scrollTarget')

        if (target) {
            const el = document.getElementById(target)
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' })
            }
            sessionStorage.removeItem('scrollTarget') // se borra para no repetirse en próximas visitas
        }
    }, [])

    return (
        <main>
            {/* HERO */}
            <div className={hero.section}>
                <div>
                    <h1>construyendo confianza, proyecto a proyecto</h1>
                    <p>Sea cual sea su proyecto, grande o pequeño, tenemos los servicios para hacerlo realidad</p>
                    <Link href={'/#contacto'}>Contáctenos</Link>
                </div>
            </div>

            {/* NOSOTROS */}
            <div id="nosotros" className={nosotros.section}>

                <div className={nosotros.text}>
                    <div className={titles.section}>
                        <p className="subtitle">Sobre nosotros</p>
                        <h2>desde 2021 construyendo confianza y calidad</h2>
                    </div>
                    <p>JYGP Construcciones es una empresa dedicada a ofrecer soluciones integrales en el rubro de la construcción. Hemos tenido el privilegio de trabajar junto a clientes que han confiado en nosotros, permitiéndonos brindar soluciones eficaces, cumplimiento de plazos y optimización de costos en cada obra. Contamos con experiencia en una amplia gama de servicios respaldados por el compromiso y la dirección de Juan Tapia Levillan, Constructor Civil.</p>
                </div>

                <div className={nosotros.visuals}>

                    <div className={nosotros.proyects}>
                        <p>+100</p>
                        <p>proyectos <br /> completados</p>
                    </div>
                    <div className={nosotros.imgs}>
                        <Image
                            src={'/images/inicio/nosotros/reparacion-de-techumbre-trabajador-construccion.jpeg'}
                            alt="Trabajador reparando una techumbre"
                            width={225}
                            height={400}
                            loading="lazy"
                            className={nosotros.img_square}
                            ref={squareImgRef}
                        />
                        <Image
                            src={'/images/inicio/nosotros/armado-acero-refuerzo-construccion.jpeg'}
                            alt="Armado de acero para refuerzo de construcción"
                            width={180}
                            height={320}
                            loading="lazy"
                            className={nosotros.img_rectangle}
                            ref={rectangleImgRef}
                        />
                    </div>
                </div>
            </div>

            {/* SERVICIOS */}
            <div className={servicios.section}>

                <div className={titles.section}>
                    <p className="subtitle">Nuestros servicios</p>
                    <h2>todo lo que necesita, en un solo lugar</h2>
                </div>

                <div className={servicios.cards}>
                    {services
                        .filter((service, index) => [2, 3, 8, 9].includes(index))
                        .map((service, index) => (
                            <ServicioCard
                                key={index}
                                titulo={service.titulo}
                                descripcion={service.descripcion}
                                icono={service.icono}
                            />
                        ))}
                </div>

                <Link
                    href={'/servicios'}
                    className={moreBtnStyles.more}
                >
                    Revise más servicios aquí
                </Link>
            </div>

            {/* GALERIA */}
            <div className={galeria.section}>

                <div className={titles.section}>
                    <p className="subtitle">Galería de fotos</p>
                    <h2>un vistazo a nuestro trabajo en terreno</h2>
                </div>

                <div className={galeria.photos}>
                    <div className={galeria.first_row}>
                        <Image
                            src={'/images/inicio/galeria/01-instalacion-faena-obra-construccion.jpeg'}
                            alt="Instalación de faena en obra de construcción"
                            width={400}
                            height={225}
                            loading="lazy"
                        />
                        <Image
                            src={'/images/inicio/galeria/02-nivelacion-compactacion-terreno-construccion.jpeg'}
                            alt="Nivelación y compactación de terreno"
                            width={400}
                            height={225}
                            loading="lazy"
                        />
                        <Image
                            src={'/images/inicio/galeria/03-reparacion-techumbre-tejas.jpeg'}
                            alt="Reparación de techumbre con tejas"
                            width={400}
                            height={225}
                            loading="lazy"
                        />
                        <Image
                            src={'/images/inicio/galeria/06-carpinteria-moldaje-construccion-cubierta.jpeg'}
                            alt="Carpintería y moldaje de cubierta"
                            width={400}
                            height={225}
                            loading="lazy"
                            className={`${galeria.mobile}`}
                        />
                    </div>

                    <div className={galeria.second_row}>
                        <Image
                            src={'/images/inicio/galeria/04-instalacion-tabiqueria-yeso-carton.jpeg'}
                            alt="Instalación de tabiquería en yeso cartón"
                            width={500}
                            height={400}
                            loading="lazy"
                            className={`${galeria.square}`}
                        />
                        <Image
                            src={'/images/inicio/galeria/05-soldadura-estructura-metalica-construccion.jpeg'}
                            alt="Soldadura de estructura metálica"
                            width={225}
                            height={400}
                            loading="lazy"
                            className={`${galeria.square}`}
                        />
                        <Image
                            src={'/images/inicio/galeria/06-carpinteria-moldaje-construccion-cubierta.jpeg'}
                            alt="Carpintería y moldaje de cubierta"
                            width={400}
                            height={225}
                            loading="lazy"
                            className={`${galeria.mobile}`}
                        />
                        <Image
                            src={'/images/inicio/galeria/07-trazado-replanteo-terreno-construccion.jpeg'}
                            alt="Trazado y replanteo del terreno"
                            width={225}
                            height={400}
                            loading="lazy"
                            className={`${galeria.square}`}
                        />
                    </div>

                    <div className={galeria.thrid_row}>
                        <Image
                            src={'/images/inicio/galeria/08-limpieza-y-mantencion-de-superficies.jpeg'}
                            alt="Limpieza y mantención de superficies"
                            width={225}
                            height={400}
                            loading="lazy"
                        />
                        <Image
                            src={'/images/inicio/galeria/09-excavacion-maquinaria.jpeg'}
                            alt="Excavación con maquinaria"
                            width={225}
                            height={400}
                            loading="lazy"
                            className={`${galeria.mobile} ${galeria.rectangle}`}
                        />
                        <Image
                            src={'/images/inicio/galeria/10-retiro-y-transporte-de-escombros.jpeg'}
                            alt="Retiro y transporte de escombros"
                            width={400}
                            height={225}
                            loading="lazy"
                        />
                    </div>
                </div>

                <Link
                    href={'/galeria'}
                    className={moreBtnStyles.more}
                >
                    Revise más fotos aquí
                </Link>
            </div>

            {/* PROVEEDORES */}
            <div className={proveedores.section}>

                <div className={titles.section}>
                    <p className="subtitle">Nuestros proveedores</p>
                    <h2>empresas que confían en nosotros</h2>
                </div>

                <div className={proveedores.logos}>

                    <Link href={'https://www.almasurhoteles.cl/es'}>
                        <Image
                            src={'/images/inicio/proveedores/almasur.svg'}
                            alt="Logo Hotel Almasur"
                            width={226}
                            height={100}
                        />
                    </Link>

                    <Link href={'https://bluepark.cl/'}>
                        <Image
                            src={'/images/inicio/proveedores/bluepark.png'}
                            alt="Logo Blue Park Estacionamientos"
                            width={197}
                            height={100}
                        />
                    </Link>

                    <Link href={'https://www.vallenevado.com/es/hotel/hotel-valle-nevado/'}>
                        <Image
                            src={'/images/inicio/proveedores/hotel.png'}
                            alt="Logo Hotel Valle Nevado"
                            width={250}
                            height={141}
                        />
                    </Link>

                    <Link href={'https://www.procentro.cl/'}>
                        <Image
                            src={'/images/inicio/proveedores/procentro.png'}
                            alt="Logo Procentro"
                            width={270}
                            height={142}
                        />
                    </Link>

                    <Link href={'https://sitio.ivallegrande.cl/equipamiento-y-servicios/'}>
                        <Image
                            src={'/images/inicio/proveedores/valle.png'}
                            alt="Logo Centro de Negocios Valle Grande"
                            width={263}
                            height={129}
                        />
                    </Link>
                </div>
            </div>

            {/* CONTACTO */}
            <div id="contacto" className={contacto.section}>
                <div>
                    <p className="subtitle">¿Tiene un proyecto en mente?</p>
                    <h2>contáctenos</h2>
                    <p>Escríbanos a nuestros WhatsApp y reciba una cotización rápida y sin compromiso</p>
                    <Link href={'/'}>
                        <Image
                            src={'/icons/whatsapp.svg'}
                            alt="whatsapp"
                            width={50}
                            height={50}
                            loading="lazy"
                            className="icons"
                        />
                        <span>Enviar mensaje</span>
                    </Link>
                </div>
            </div>
        </main>
    );
}
