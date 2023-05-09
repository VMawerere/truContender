import React from "react";
import Navbar from "./components/navbar.js";
import Banner from "./components/Banner.js";
import Services from "./components/Services.js";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>   
        <Banner/>  
        <Services/>
      </header>
    </div>
  );
}

export default App;
