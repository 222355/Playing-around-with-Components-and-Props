import React from "react";
import "./App.css";
import GallaryHeader from "./components/GallaryHeader";
import ImageGallary from "./components/ImageGallary";
import GallaryFooter from "./components/GallaryFooter";
import imageData from "./components/ImageData";

function App() {
  return (
    <div>
      {/* Header Section */}
      <GallaryHeader />
      <ImageGallary imageData={imageData} />
      {/* adding footer component */}
      <GallaryFooter />
    </div>
  );
}

export default App;
