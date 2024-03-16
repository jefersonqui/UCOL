import { useState } from 'react'

import Banner from './pages/banner.jsx'
import Navbar from './components/navbar.jsx'
import Info from './pages/informacion.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Banner/>
      <Info/>
    </>
  )
}

export default App;
