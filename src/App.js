import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import News from "./components/News/News";
import Search from "./components/Search/Search";
import { router } from "./config/config";
import Pagination from "./page/Pagination";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Example total number of pages

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Add logic to fetch new data for the page change if necessary
  };

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          {router.map((path) => (
            <Route
              exact
              key={uuidv4()}
              path={path.path}
              element={
                <News
                  key={path.key}
                  newscategory={path.category}
                  country={path.country}
                  currentPage={currentPage} // Pass currentPage to News component
                />
              }
            />
          ))}
          <Route path="/search/:query" element={<Search />} />
        </Routes>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </Router>
    </>
  );
}

export default App;
