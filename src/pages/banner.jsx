import stylesb from './banner.module.css';
import bannerSvg from '../assets/banner.svg';
const Banner = () => {
  return (
    <section className={stylesb.sectionban}>
      <div className={stylesb["banner-container"]}>
        <div className={stylesb["banner-column"]}>
          <div className={stylesb.bannerInner}>
            <h1 className={stylesb["heading-xl"]}>Mapa Interactivo De Colombia</h1>
            <p className={stylesb.paragraph}>¡Explora el conocimiento que se extiende por cada rincón de nuestra nación!</p>
            <button className={`${stylesb.btn} ${stylesb.btnDarken} ${stylesb.btnInline}`}>Ver Mapa</button>
          </div>
        </div>
        <div className={stylesb["image-container"]}>
          <img className={stylesb["banner-image"]} src={bannerSvg} alt="Banner" />
        </div>
      </div>
    </section>


  );
};
export default Banner;