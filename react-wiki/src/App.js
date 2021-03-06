import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import './App.css';

import Search from "./components/Search/Search"
import Card from "./components/Card/Card";
import Pagination from "./components/Pagination/Pagination";
import Filter from "./components/Filter/Filter";
import Navbar from "./components/Navbar/Navbar"
import Episodes from "./Pages/Episodes";
import Location from "./Pages/Location";

import CardDetails from "./components/Card/CardDetails";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom" 

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />

        <Route path="/episodes" element= {<Episodes />} />
        <Route path="/episodes/:id" element={<CardDetails />} />

        <Route path="/location" element={<Location />} />
        <Route path="/location/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  )
}

const Home = () => {
    /*
    Backticks are template literal/interpolated string literal introduced in ECMA6Script. 
    Compatible for multiple lines.
  */

    let [fetchedData, updateFetchedData] = useState([]);

    let { info, results } = fetchedData;
  
    let [pageNumber, updatePageNumber] = useState(1);
    let [search, setSearch] = useState("");
  
    let [status, updateStatus] = useState("");
    let [gender, updateGender] = useState("");
    let [species, updateSpecies] = useState("");
  
     // let api = `https://rickandmortyapi.com/api/character/?page=1`
  
     let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
  
    
    /* 
      useState Hook
      --------------
      const [initialState, updatedArgumentWithAMethod/Function] = useState(initialState)
  
      React will remember its current value between re renders and provide the most recent one to our function.
      Reading state in a function component {initialState} and in a class based function {this.state.initialState}
      Unlike this.setState, useState hook replaces the current state instead of merging it.
  
    /*
      useEffect Hook is used to retrieve data, it causes side effect, which is
      to perform our effects after React has updated the DOM. It is a combination of 
      React Lifecycle Hooks(componentDidMount, componentDidUpdate, componentWillUnmount)
      Data fetching, setting subscription and 
  
      React remember the effect and it runs after the DOM gets updated.
      It cleans up the previous effect before applying the next effect. 
    */
  
    useEffect(() => { (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data)
    })(); }, [api]);
  
  
    return (
      <div className="App">
        <h1 className="text-center mb-3">Search</h1>
        <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
  
        <h1 className="text-center mb-3">Characters</h1>
        <div className="container">
          <div className="row">
            Filter component will be placed here
          </div>
  
          <div className="col-lg-8 col-12">
            <div className="col-lg-8 col-12">
              <div className="row">
                <Card page="/" results={results} />
              </div>
            </div>
          </div>
        </div>
  
        <Pagination 
          info={info}
          pageNumber={pageNumber}
          updatePageNumber={updatePageNumber}
          />
  
        <Filter
          pageNumber={pageNumber}
          status={status}
          updateStatus={updateStatus}
          updateGender={updateGender}
          updateSpecies={updateSpecies}
          updatePageNumber={updatePageNumber}
          />
      </div>
    );
}

export default App;
