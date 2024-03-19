import React, { useState, useEffect } from 'react';
import styles from './map.module.css';
import coSvg from '../assets/svgCo.svg';
import departamentoData from '../assets/data.json';



const Map = () => {

    //////////////////
    const [svgContent, setSvgContent] = useState(null);
    const [selectedDepartment, setSelectedDepartment] = useState(null);
    const [departmentInfo, setDepartmentInfo] = useState(null);

    useEffect(() => {
        const fetchSvg = async () => {
            try {
                const response = await fetch(coSvg);
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
            setSvgContent(null);
        };
    }, []);
    //aqui se escucha el click
    const handleDepartmentClick = (departmentId) => {
        const selectedDep = departamentoData.departamentos.find(dep => dep.departamento === departmentId);
        setSelectedDepartment(departmentId);
        setDepartmentInfo(selectedDep);

    };




    return (
        <section className={styles.container}>
            <div className={styles.conttile}>
                <h2 className={styles.titleh2}>Mapa</h2>
            </div>
            <div className={styles.containermapa}>
                <div className={styles.divmapa}>
                    <div className={styles.titleDepartamento}>
                        <h4>Departamento: </h4><p>{selectedDepartment}</p>
                    </div>
                    <div className={styles.pathDepartamento}>

                    </div>
                </div>
                <div className={`${styles.mapa}`}>
                    {svgContent && (
                        <div
                            className={styles.svgmap}
                            onClick={(e) => handleDepartmentClick(e.target.id)}
                            dangerouslySetInnerHTML={{ __html: svgContent }}
                        />
                    )}
                </div>
                <div className={styles.description}>
                <div className={styles.geo}>
                    {departmentInfo && (
                            <p>Latitud: {departmentInfo.latitud}, Longitud: {departmentInfo.longitud}</p>
                        )}
                </div>
                <div className={styles.containerinfoScroll}>
                    {departmentInfo && (
                        <div className={styles.containerinfo}>
                            <h3>Universidades Públicas</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Ciudad</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {departmentInfo.universidades.publicas.map((university, index) => (
                                        <tr key={index}>
                                            <td>{university.nombre}</td>
                                            <td>{university.ciudad}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <h3>Universidades Privadas</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Ciudad</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {departmentInfo.universidades.privadas.map((university, index) => (
                                        <tr key={index}>
                                            <td>{university.nombre}</td>
                                            <td>{university.ciudad}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
                </div>
            </div >

            
        </section>
    )
}
export default Map;
