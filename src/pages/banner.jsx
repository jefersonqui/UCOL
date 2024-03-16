import stylesBanner from './banner.module.css';
import bannerSvg from '../assets/banner.svg';
const Banner = () => {
  return (
    <div className={stylesBanner.container}>
      <div className={stylesBanner.div__container}>
        <h1 className={stylesBanner.titleh1}>Mapa Interactivo De Colombia</h1>
        <p className={stylesBanner.subtitle}>¡Explora el conocimiento que se extiende por cada rincón de nuestra nación!</p>
      </div>
      <aside className={stylesBanner.asidecont}>
        <div className={stylesBanner.contimg}>
        <img 
        className={stylesBanner.bannerimg} 
        src={bannerSvg} 
        alt="Banner"
        onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'}
        onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
        />
        </div>
      </aside>
    </div>
  )
}
export default Banner;