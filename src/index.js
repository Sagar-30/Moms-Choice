import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import Header from './components/headercomponent.jsx'
import Navbar from './components/navbarcomponent.jsx'
import Mainbody from './components/maincomponent.jsx'
import Footer from './components/footercomponent.jsx'
import CarouselMain from './components/carouselcomponent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Navbar />
    <Mainbody />
    <Footer />
     
  </React.StrictMode>,
)
