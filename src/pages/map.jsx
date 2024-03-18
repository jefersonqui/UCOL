import React, { useState, useEffect } from 'react';
import styles from './map.module.css';
import coSvg from '../assets/svgCo.svg';



const Map = () => {

    //////////////////
    const [svgContent, setSvgContent] = useState(null);
    const [selectedDepartment, setSelectedDepartment] = useState(null);



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
    //////////////////


    //aqui se escucha el click
    const handleDepartmentClick = (departmentId) => {
        setSelectedDepartment(departmentId);

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
                    <p>xd</p>

                </div>
            </div >
            <div className={styles.containerinfo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad corrupti ipsa ab aperiam enim voluptas perspiciatis tenetur
                aliquam voluptatibus nobis delectus, vel tempora quibusdam nihil esse atque dicta beatae voluptates?</div>
            <script async src="https://cse.google.com/cse.js?cx=104da680270bc41d5">
            </script>
            <div class="gcse-search"></div>
        </section>
    )
}
export default Map;