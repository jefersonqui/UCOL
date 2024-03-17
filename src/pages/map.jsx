import React, { useState, useEffect } from 'react';
import styles from './map.module.css';
import coSvg from '../assets/co.svg'



const Map = () => {

    //////////////////
    const [svgContent, setSvgContent] = useState(null);
    useEffect(() => {
        const fetchSvg = async () => {
            try {
                const response = await fetch(coSvg); // Suponiendo que coSvg es la URL del SVG
                if (!response.ok) {
                    throw new Error('Failed to fetch SVG');
                }
                const svgText = await response.text();
                setSvgContent(svgText);
            } catch (error) {
                console.error('Error fetching SVG:', error);
            }
        };

        fetchSvg();

        return () => {
            // Limpiar en caso de desmontaje del componente o cambio rápido
            setSvgContent(null);
        };
    }, []); // Este efecto se ejecutará solo una vez al montar el componente

    //////////////////


    return (
        <section className={styles.container}>
            <div className={styles.conttile}>
                <h2 className={styles.titleh2}>Mapa</h2>
            </div>
            <div className={styles.containermapa}>
                <div className={styles.divmapa}>
                    <h2>Departamento:  </h2>
                    <p>Descripcion de la parte seleccionada del mapa</p>
                </div>
                <div className={`${styles.mapa} ${styles.svgmap}`}>
                    {/* <img class={styles.svgmap} src={coSvg} alt="MapaCo" /> */}
                    {svgContent && (
                        <div 
                            className={styles.svgConten}
                            dangerouslySetInnerHTML={{ __html: svgContent }}                      
                        />
                    )}
                </div>
                <div className={styles.description}>
                    <p>Descripcion de la parte seleccionada del mapa</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci voluptates ipsam, a est accusamus, deserunt nulla iste impedit quaerat dolor assumenda rerum eius et sunt velit provident, harum consequuntur. Architecto.
                    </p>
                </div>
            </div >
        </section>
    )
}
export default Map;