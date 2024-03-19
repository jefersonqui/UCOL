import { useState } from 'react'

import Banner from './pages/banner.jsx'
import NavBar from './components/navbar.jsx'
import Info from './pages/informacion.jsx'
import Map from './pages/map.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <NavBar /> */}
      <Banner />
      <Info />
      <Map />
      {/* <script async src="https://cse.google.com/cse.js?cx=104da680270bc41d5">
      </script>
      <div class="gcse-search"></div> */}
    </>
  )
}

export default App;
