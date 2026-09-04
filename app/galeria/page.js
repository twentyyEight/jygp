"use client"
import Image from "next/image"
import Header from "../components/Header/Header"
import PhotosBox from "../components/PhotosBox/PhotosBox"

import styles from "./page.module.css"
import cafeteria from "../styles/galeria/cafeteria.module.css"
import piscina from "../styles/galeria/piscina.module.css"
import llave from "../styles/galeria/llave.module.css"
import unab from "../styles/galeria/unab.module.css"
import hotel from "../styles/galeria/hotel.module.css"
import techo from "../styles/galeria/techo.module.css"
import tabiqueria from "../styles/galeria/tabiqueria.module.css"
import vivienda from "../styles/galeria/vivienda.module.css"
import piso from "../styles/galeria/piso.module.css"
import escaleras from "../styles/galeria/escaleras.module.css"

export default function Galeria() {

    return (
        <div className={styles.galeria}>
            <Header
                titulo={'Galería'}
                descripcion={'Explore nuestra galería y conozca los proyectos que hemos desarrollado, además de nuestra forma de trabajar en terreno'}
            />

            <div className={styles.boxes}>

                {/* Piscina */}
                <PhotosBox
                    title={'piscina'}
                    img={'piscina/piscina-vacia'}
                >
                    <div className={piscina.section}>
                        <Image
                            src={'/images/galeria/piscina/excavacion-piscina.jpeg'}
                            alt={'excavacion piscina'}
                            width={1280}
                            height={720}
                        />
                        <Image
                            src={'/images/galeria/piscina/construccion-piscina.jpeg'}
                            alt={'construccion piscina'}
                            width={1280}
                            height={960}
                        />
                        <Image
                            src={'/images/galeria/piscina/construccion-piscina-hormigon.jpeg'}
                            alt={'construccion piscina hormigon'}
                            width={1152}
                            height={864}
                        />
                        <Image
                            src={'/images/galeria/piscina/piscina-vacia.jpeg'}
                            alt={'piscina vacia'}
                            width={1152}
                            height={864}
                        />
                    </div>
                </PhotosBox>

                {/* Cafeteria */}
                <PhotosBox
                    title={'Cafetería'}
                    img={'cafetería/mesas-y-sillas-cafeteria'}
                >
                    <div className={cafeteria.section}>
                        <div className={cafeteria.first_row}>
                            <div className={cafeteria.first_subrow}>
                                <Image
                                    src={'/images/galeria/cafetería/medicion-puerta-metalica.jpeg'}
                                    alt={'medicion puerta metalica'}
                                    width={899}
                                    height={1599}
                                    className={cafeteria.rectangle}
                                />
                                <Image
                                    src={'/images/galeria/cafetería/cafeteria-en-construccion.jpeg'}
                                    alt={'cafeteria en construccion'}
                                    width={719}
                                    height={1280}
                                    className={cafeteria.square}
                                />
                                <Image
                                    src={'/images/galeria/cafetería/instalacion-lamparas-colgantes.jpeg'}
                                    alt={'instalacion lamparas colgantes'}
                                    width={719}
                                    height={1280}
                                    className={cafeteria.rectangle}
                                />
                            </div>
                            <div className={cafeteria.second_subrow}>
                                <Image
                                    src={'/images/galeria/cafetería/instalacion-lamparas-colgantes.jpeg'}
                                    alt={'instalacion lamparas colgantes'}
                                    width={719}
                                    height={1280}
                                    className={cafeteria.rectangle}
                                />
                                <Image
                                    src={'/images/galeria/cafetería/habitacion-trasera-cafeteria.jpeg'}
                                    alt={'habitacion trasera cafeteria'}
                                    width={1600}
                                    height={900}
                                />
                                <Image
                                    src={'/images/galeria/cafetería/mostrador-cafeteria.jpeg'}
                                    alt={'mostrador cafeteria'}
                                    width={1280}
                                    height={1024}
                                />
                            </div>
                        </div>
                        <div className={cafeteria.second_row}>
                            <Image
                                src={'/images/galeria/cafetería/mostrador-cafeteria.jpeg'}
                                alt={'mostrador cafeteria'}
                                width={1280}
                                height={1024}
                            />
                            <Image
                                src={'/images/galeria/cafetería/interior-cafeteria.jpeg'}
                                alt={'interior cafeteria'}
                                width={1600}
                                height={1280}
                            />

                            <Image
                                src={'/images/galeria/cafetería/mesas-y-sillas-cafeteria.jpeg'}
                                alt={'mesas y sillas cafeteria'}
                                width={1600}
                                height={1200}
                            />
                        </div>
                    </div>
                </PhotosBox>

                {/* Llave */}
                <PhotosBox
                    title={'instalación llave agua'}
                    img={'llave/quincho-terraza-parrilla'}
                >
                    <div className={llave.section}>
                        <Image
                            src={'/images/galeria/llave/lavaplatos-madera-construccion.jpeg'}
                            alt={'lavaplatos madera construccion'}
                            width={1600}
                            height={900}
                        />
                        <Image
                            src={'/images/galeria/llave/lavaplatos-madera.jpeg'}
                            alt={'lavaplatos madera'}
                            width={1600}
                            height={900}
                        />
                        <Image
                            src={'/images/galeria/llave/quincho-terraza-parrilla.jpeg'}
                            alt={'quincho terraza parrilla'}
                            width={1600}
                            height={900}
                        />
                    </div>
                </PhotosBox>

                {/* UNAB */}
                <PhotosBox
                    title={'mantención fachada de universidad'}
                    img={'unab/unab-republica-1'}
                >
                    <div className={unab.section}>
                        <Image
                            src={'/images/galeria/unab/unab-republica-1.jpeg'}
                            alt={'unab republica'}
                            width={1600}
                            height={1200}
                        />
                        <Image
                            src={'/images/galeria/unab/unab-republica-2.jpeg'}
                            alt={'unab republica'}
                            width={1200}
                            height={1600}
                        />
                        <Image
                            src={'/images/galeria/unab/unab-republica-3.jpeg'}
                            alt={'unab republica'}
                            width={900}
                            height={1600}
                            className={unab.position}
                        />
                        <Image
                            src={'/images/galeria/unab/unab-republica-4.jpeg'}
                            alt={'unab republica'}
                            width={1600}
                            height={1200}
                        />
                    </div>
                </PhotosBox>

                {/* Hotel */}
                <PhotosBox
                    title={'renovación de techo de hotel puerta del sol'}
                    img={'hotel/impermeabilizacion-techo-3'}
                >
                    <div className={hotel.section}>
                        <div className={hotel.first_div}>
                            <Image
                                src={'/images/galeria/hotel/reparacion-techo-madera.jpeg'}
                                alt={'reparacion techo madera'}
                                width={1600}
                                height={1200}
                                className={hotel.video}
                            />
                            <Image
                                src={'/images/galeria/hotel/impermeabilizacion-techo-3.jpeg'}
                                alt={'impermeabilizacion techo'}
                                width={900}
                                height={1600}
                                className={hotel.square}
                            />
                        </div>

                        <div className={hotel.second_div}>
                            <Image
                                src={'/images/galeria/hotel/impermeabilizacion-techo-3.jpeg'}
                                alt={'impermeabilizacion techo'}
                                width={900}
                                height={1600}
                                className={hotel.square}
                            />
                            <Image
                                src={'/images/galeria/hotel/impermeabilizacion-techo-2.jpeg'}
                                alt={'impermeabilizacion techo'}
                                width={900}
                                height={1600}
                                className={hotel.rectangle}
                            />
                        </div>

                        <div className={hotel.thrid_div}>
                            <Image
                                src={'/images/galeria/hotel/impermeabilizacion-techo-2.jpeg'}
                                alt={'impermeabilizacion techo'}
                                width={900}
                                height={1600}
                                className={hotel.rectangle}
                            />
                            <Image
                                src={'/images/galeria/hotel/impermeabilizacion-techo-1.jpeg'}
                                alt={'impermeabilizacion techo'}
                                width={1600}
                                height={900}
                            />
                        </div>
                    </div>
                </PhotosBox>

                {/* Techo */}
                <PhotosBox
                    title={'impermeabilización de techo plano'}
                    img={'techo/impermeabilizacion-techo-plano-3'}
                >
                    <div className={techo.section}>
                        <Image
                            src={'/images/galeria/techo/impermeabilizacion-techo-plano-1.jpeg'}
                            alt={'impermeabilizacion techo plano'}
                            width={1200}
                            height={1600}
                        />
                        <Image
                            src={'/images/galeria/techo/impermeabilizacion-techo-plano-2.jpeg'}
                            alt={'impermeabilizacion techo plano'}
                            width={960}
                            height={1280}
                            className={techo.position}
                        />
                        <Image
                            src={'/images/galeria/techo/impermeabilizacion-techo-plano-3.jpeg'}
                            alt={'impermeabilizacion techo plano'}
                            width={1200}
                            height={1600}
                        />
                        <Image
                            src={'/images/galeria/techo/impermeabilizacion-techo-plano-4.jpeg'}
                            alt={'impermeabilizacion techo plano'}
                            width={1200}
                            height={1600}
                            className={techo.position}
                        />
                    </div>
                </PhotosBox>

                {/* Tabiqueria */}
                <PhotosBox
                    title={'tabiquería'}
                    img={'tabiqueria/tabiqueria-carton'}
                >
                    <div className={tabiqueria.section}>
                        <Image
                            src={'/images/galeria/tabiqueria/tabiqueria-estructura-metalica.jpeg'}
                            alt={'tabiqueria estructura metalica'}
                            width={900}
                            height={1600}
                        />
                        <Image
                            src={'/images/galeria/tabiqueria/tabiqueria-aislacion-termica.jpeg'}
                            alt={'tabiqueria aislacion termica'}
                            width={1200}
                            height={1600}
                        />
                        <Image
                            src={'/images/galeria/tabiqueria/tabiqueria-carton.jpeg'}
                            alt={'tabiqueria carton'}
                            width={1200}
                            height={1600}
                        />
                        <Image
                            src={'/images/galeria/tabiqueria/tabiqueria-yeso-carton.jpeg'}
                            alt={'tabiqueria yeso carton'}
                            width={1600}
                            height={900}
                        />
                    </div>
                </PhotosBox>

                {/* Vivienda */}
                <PhotosBox
                    title={'construcción de vivienda'}
                    img={'casa/revestimiento-siding'}
                >
                    <div className={vivienda.section}>
                        <Image
                            src={'/images/galeria/casa/construccion-vivienda.jpeg'}
                            alt={'construccion vivienda'}
                            width={1600}
                            height={900}
                        />
                        <Image
                            src={'/images/galeria/casa/estructura-madera-casa-1.jpeg'}
                            alt={'estructura madera casa 1'}
                            width={1600}
                            height={900}
                        />
                        <Image
                            src={'/images/galeria/casa/estructura-madera-casa-2.jpeg'}
                            alt={'estructura madera casa 2'}
                            width={1600}
                            height={900}
                        />
                        <Image
                            src={'/images/galeria/casa/estructura-metal-techo-vivienda-1.jpeg'}
                            alt={'estructura metal techo vivienda 1'}
                            width={1600}
                            height={900}
                        />
                        <Image
                            src={'/images/galeria/casa/estructura-metal-techo-vivienda-2.jpeg'}
                            alt={'estructura metal techo vivienda 2'}
                            width={1600}
                            height={900}
                        />
                        <Image
                            src={'/images/galeria/casa/estructura-piso-madera.jpeg'}
                            alt={'estructura piso madera'}
                            width={1600}
                            height={1200}
                        />
                        <Image
                            src={'/images/galeria/casa/revestimiento-exterior.jpeg'}
                            alt={'revestimiento exterior'}
                            width={1032}
                            height={774}
                        />
                        <Image
                            src={'/images/galeria/casa/revestimiento-siding.jpeg'}
                            alt={'revestimiento siding'}
                            width={1032}
                            height={774}
                        />
                    </div>
                </PhotosBox>

                {/* Piso */}
                <PhotosBox
                    title={'Instalación de piso de cerámica'}
                    img={'piso/instalacion-piso-ceramica-2'}
                >
                    <div className={piso.section}>
                        <Image
                            src={'/images/galeria/piso/instalacion-piso-ceramica-1.jpeg'}
                            alt={'instalacion piso ceramica'}
                            width={1600}
                            height={1200}
                        />
                        <Image
                            src={'/images/galeria/piso/instalacion-piso-ceramica-2.jpeg'}
                            alt={'instalacion piso ceramica'}
                            width={1600}
                            height={1200}
                        />
                        <Image
                            src={'/images/galeria/piso/instalacion-piso-ceramica-3.jpeg'}
                            alt={'instalacion piso ceramica'}
                            width={1600}
                            height={1200}
                        />
                    </div>
                </PhotosBox>

                {/* Escaleras */}
                <PhotosBox
                    title={'construcción de escalera de madera'}
                    img={'escaleras/construccion-escalera-de-madera-1'}
                >
                    <div className={escaleras.section}>
                        <Image
                            src={'/images/galeria/escaleras/construccion-escalera-de-madera-1.jpeg'}
                            alt={'construccion escalera de madera'}
                            width={900}
                            height={1600}
                        />
                        <Image
                            src={'/images/galeria/escaleras/construccion-escalera-de-madera-2.jpeg'}
                            alt={'construccion escalera de madera'}
                            width={900}
                            height={1600}
                        />
                        <Image
                            src={'/images/galeria/escaleras/construccion-escalera-de-madera-3.jpeg'}
                            alt={'construccion escalera de madera'}
                            width={900}
                            height={1600}
                        />
                        <Image
                            src={'/images/galeria/escaleras/construccion-escalera-de-madera-4.jpeg'}
                            alt={'construccion escalera de madera'}
                            width={900}
                            height={1600}
                        />
                    </div>
                </PhotosBox>
            </div>
        </div>
    )
}