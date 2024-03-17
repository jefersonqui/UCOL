import styles from './map.module.css';


const Map = () => {
    return (
        <section className={styles.container}>
            <h2 className={styles.titleh2}>Mapa</h2>
            <div className={styles.containermapa}>
                <div className={styles.divmapa}>

                    <p>Descripcion de la parte seleccionada del mapa</p>
                </div>
                <div className={styles.mapa}>
                    <p>Aqui va el mapa</p>
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