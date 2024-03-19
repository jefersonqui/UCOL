import { useState } from 'react'

import Banner from './pages/banner.jsx'
import NavBar from './components/navbar.jsx'
import Info from './pages/informacion.jsx'
import Map from './pages/map.jsx'
import Futter from './pages/futter.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <NavBar /> */}
      <Banner />
      <Info />
      <Map />
      <Futter />

    </>
  )
}

export default App;
