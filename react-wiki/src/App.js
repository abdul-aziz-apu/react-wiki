import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import './App.css';

// import Search from "./components/Search/Search"
// import Card from "./components/Card/Card";
// import Pagination from "./components/Pagination/Pagination";
// import Filter from "./components/Filter/Filter";
// import Navbar from "./components/Navbar/Navbar"

function App() {
  return (
    <div className="App">
      <h1 className="text-center mb-3">Characters</h1>
      <div className="container">
        <div className="row">
          Filter component will be placed here
        </div>
        <div className="col-lg-8 col-12">
          <div className="col-lg-8 col-12">
            <div className="row">
              Card component will be placed here.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
