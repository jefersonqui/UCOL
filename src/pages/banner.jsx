import stylesb from './banner.module.css';
import bannerSvg from '../assets/banner.svg';
const Banner = () => {
  return (
    <section class={stylesb.sectionban}>
      <div class={stylesb["banner-container"]}>
        <div class={stylesb["banner-column"]}>
          <div class={stylesb.bannerInner}>
            <h1 class={stylesb["heading-xl"]}>Mapa Interactivo De Colombia</h1>
            <p class={stylesb.paragraph}>¡Explora el conocimiento que se extiende por cada rincón de nuestra nación!</p>
            <button class={`${stylesb.btn} ${stylesb.btnDarken} ${stylesb.btnInline}`}>Ver Mapa<i className="bx bx-right-arrow-alt"></i></button>
          </div>
        </div>
        <div class={stylesb["image-container"]}>
          <img class={stylesb["banner-image"]} src={bannerSvg} alt="Banner" />
        </div>
      </div>
    </section>


  );
};
export default Banner;