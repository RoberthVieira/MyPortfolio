import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './styles/App.css';
import About from './pages/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Aurora from './assets/Aurora';

function App() {

  return (
    <div className='relative min-h-screen w-full bg-[#0a0f1a] text-white'>

      <div className='absolute inset-0 z-0'>
        <Aurora
          colorStops={['#00ffab', '#3A29FF', '#00ffab']}
          amplitude={1.0} 
          blend={0.5}
          speed={0.5} 
        />
      </div>

      <div className='relative z-10'>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
      </div>

    </div>
  )
}

export default App
