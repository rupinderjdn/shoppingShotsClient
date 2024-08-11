import './App.css'
import { Navbar } from './Components/Navbar/Navbar'
import { CentralBody } from './Components/CentralBody/CentralBody'
import { Footer } from './Components/Footer/Footer'
import MainAdv from './Components/MainAdv/MainAdv'

function App() {

  return (
    <div className=' min-h-screen   w-full  overflow-auto'>
      <div id="navbar-mainAdv" className='platform-gradient-main'>
        {/* navbar should be fixed and should be mobile friendly */}

    <div className='shadow-3xl  z-10 relative text-white'>
        <Navbar />
        <MainAdv />
    </div>
      </div>
      <div className='w-full flex flex-col h-full text-black'>
        <CentralBody />
        <Footer />
      </div>
    </div>
  )
}

export default App
