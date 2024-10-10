import './App.css'
// import Header from './assets/components/Header'
// import Footer from './assets/components/Footer'
// import Profile from './assets/components/Profile'
// import Clock from './assets/components/Clock'
// import Tech from './assets/components/Tech'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './assets/pages/Home'
import Sobre from './assets/pages/Sobre'
import Instrumentos from './assets/pages/Instrumentos'


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/sobre' element={<Sobre/>}/>
          <Route path='/instrumentos' element={<Instrumentos/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
