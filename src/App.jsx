import './App.css'
import './index.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Blog from './pages/Blog'


function App() {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/blog" element={<Blog/>}/>
      </Routes>
    </BrowserRouter>
  </div>
}

export default App
