import React from 'react';
import './App.css';
import  GallaryHeader from './components/GallaryHeader';
import ImageGallary from './components/ImageGallary';
import GallaryFooter from './components/GallaryFooter';


function App() {
  return (
    <div>
      <GallaryHeader/>
      
      <ImageGallary/>
      {/* adding footer component */}
      <GallaryFooter/> 
    </div>
  )
}

export default App;
