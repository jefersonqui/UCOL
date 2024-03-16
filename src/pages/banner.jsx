import stylesb from './banner.module.css';
import bannerSvg from '../assets/banner.svg';
const Banner = () => {
  return (

    <section className={stylesb.sectionban}>
      <div className={stylesb["banner-column"]}>
      <img
            className={stylesb["banner-image"]}
            src={bannerSvg}
            alt="Banner"
            onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
          />
        <div className={stylesb.bannerInner}>
          <h1 className={stylesb["heading-xl"]}>Mapa Interactivo De Colombia</h1>
          <p className={stylesb.paragraph}>
          ¡Explora el conocimiento que se extiende por cada rincón de nuestra nación!
          </p>
          <button className={`${stylesb.btn} ${stylesb.btnDarken} ${stylesb.btnInline}`}>
            Ver Mapa
          </button>


        </div>

      </div>
    </section>

  );
};
export default Banner;