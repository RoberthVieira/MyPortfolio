import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './styles/App.css';
import About from './pages/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <div className='relative min-h-screen w-full bg-[#0a0f1a] text-white flex flex-col'>
      <div className='relative z-10 flex flex-col min-h-screen'>
        <Header />
        <main className='flex-1 flex flex-col'>
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          <Footer />
        </main>
      </div>

    </div>
  )
}

export default App
