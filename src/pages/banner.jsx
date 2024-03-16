import stylesBanner from './banner.module.css';
const Banner = () => {
  return (
    <div className={stylesBanner.headerdiv__container}>
      <header className={stylesBanner.header__container}>
        <h1 className={stylesBanner.titleh1}>Mapa Interactivo De Colombia</h1>
        <p className={stylesBanner.subtitle}>¡Explora el conocimiento que se extiende por cada rincón de nuestra nación!</p>
      </header>
      <aside>
        <div>
          <img src="" alt="" />
        </div>
      </aside>
    </div>
  )
}
export default Banner;