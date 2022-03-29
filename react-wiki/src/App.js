import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import './App.css';

import Search from "./components/Search/Search"
import Card from "./components/Card/Card";
// import Pagination from "./components/Pagination/Pagination";
// import Filter from "./components/Filter/Filter";
// import Navbar from "./components/Navbar/Navbar"

function App() {
  /*
    Backticks are template literal/interpolated string literal introduced in ECMA6Script. 
    Compatible for multiple lines.
  */



  let [fetchedData, updateFetchedData] = useState([]);

  let { info, results } = fetchedData;

  let [pageNumber, updatePageNumber] = useState(1);
  let [search, setSearch] = useState("");

   // let api = `https://rickandmortyapi.com/api/character/?page=1`

   let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;


  /*
    useEffect Hook is used to retrieve data, it causes side effects, which is
    to perform our effects after React has updated the DOM. It is a combination of 
    React Lifecycle Hooks(componentDidMount, componentDidUpdate, componentWillUnmount)
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
              <Card results={results} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
