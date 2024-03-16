import { useState } from 'react'

import Banner from './pages/banner.jsx'
import Navbar from './components/navbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Banner/>
    </>
  )
}

export default App;
