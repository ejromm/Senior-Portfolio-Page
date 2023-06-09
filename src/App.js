
import './styles/App.css';

import React from 'react'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Photo from './pages/Photo';
import Film from './pages/Film';
import FilmTwo from './pages/FilmTwo';
import About from './pages/About'; 
import Footer from './components/Footer';

export default function App() {
  return (
    <>
    
     <BrowserRouter>
     <Header />
     <Routes>
     <Route  path='/Senior-Portfolio-Page' element={<Home />}/>
     <Route  path='/Senior-Portfolio-Page/photo' element={<Photo />} />
     <Route  path='/Senior-Portfolio-Page/film/untitled' element={<Film />}/>
     <Route  path='/Senior-Portfolio-Page/film/interview' element={<FilmTwo />}/>
     <Route  path='/Senior-Portfolio-Page/about' element={<About />}/>
     </Routes>
     <Footer />
     </BrowserRouter>
     
     </>
  );
}

