import './App.css'
import Header from './assets/components/Header'
import Footer from './assets/components/Footer'
import Profile from './assets/components/Profile'
import Clock from './assets/components/Clock'
import Tech from './assets/components/Tech'
import FuncaoPura from './assets/components/Funcaopura'

function App() {

  return (
    <>
      <Header/>
      <Profile/>
      <Clock color='black'/>
      <Tech/>
      <FuncaoPura/>
      {/* <TeaGathering/> */}
      <Footer/>
    </>
  )
}

export default App
