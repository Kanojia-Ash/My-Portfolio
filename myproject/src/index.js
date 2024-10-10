import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './components/App.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header.js';
import Banner from './components/Banner.js';
import About from './components/About.js'
import Services from './components/Services.js'
import MyExpertise from './components/MyExpertise.js';
import Footer from './components/Footer.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Header/>
    <Banner/>
    <About/>
    <Services/> 
    <MyExpertise/>
    <Footer/>
  </React.StrictMode>
);


reportWebVitals();
