import styles from './informacion.module.css';

const Informacion = () => {
  return (
    <div className={styles.container}>
        <div className={styles.item}>
            <h2>Bienvenido a nuestra plataforma de información sobre universidades en Colombia</h2>
            <p>Nuestra página web es una plataforma interactiva diseñada para ayudarte a 
            explorar las universidades públicas y privadas de Colombia de una 
            manera intuitiva y eficiente...</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, illo. Quo, veritatis vero vitae facilis non consequuntur labore adipisci, vel amet tempore dolor repellat laudantium aliquid doloribus unde itaque. Numquam?</p>
        </div>
        <div className={styles.item}>
            <h2>¿Cómo funciona?</h2>
            <ol>
                <li><strong>Exploración por mapa interactivo:</strong> Utiliza nuestro mapa interactivo para navegar por los diferentes departamentos de Colombia...</li>
                <li><strong>Detalles detallados de las universidades:</strong> Una vez que selecciones un departamento...</li>
                <li><strong>Filtrado y búsqueda avanzada:</strong> Además de explorar por mapa...</li>
            </ol>
        </div>
    </div>
    )
}
export default Informacion;