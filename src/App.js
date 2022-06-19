import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import navData from "./data/navbar.data";
import HomePage from "./pages/HomePage";
import mediaData from "./data/media.data";
import "./style/App.css";
import SearchBar from "./components/SearchBar";
import { useEffect } from "react";

function App() {
  const [searchedTerm, setSearchedTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const getSearchTerm = (term) => {
    setSearchedTerm(term);
  };

  useEffect(() => {
    if (searchedTerm.length) {
      setFilteredData(
        mediaData.filter((media) => {
          return (
            media.title.toLowerCase().indexOf(searchedTerm.toLowerCase()) !== -1
          );
        })
      );
    } else {
      setFilteredData(mediaData);
    }
  }, [searchedTerm]);

  const MyRoutes = navData.map(
    ({ id, linkTo, PageElement, filterFunction }) => {
      return (
        <Route
          key={id}
          path={linkTo}
          element={
            <PageElement
              mediaData={
                filterFunction ? filterFunction(filteredData) : filteredData
              }
            />
          }
        />
      );
    }
  );

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <NavBar />
      <SearchBar getSearchTerm={getSearchTerm} />
      <Routes>
        <Route path="/" element={<HomePage mediaData={filteredData} />} />
        {MyRoutes}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
