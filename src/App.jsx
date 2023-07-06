import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import Cards from './components/Cards'
//import LikeButton2 from './components/LikeButton'
//import LikeButtonCC from './components/LikeButtonCC'
import Portfolio from './components/Portfolio'
//import LikeButtonNew from './components/LikeButtonNew'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className='app'>
      {/* <LikeButton2 /> */}
      {/* <LikeButtonCC /> */}
      <Portfolio />
    </div>
  )
}

export default App
