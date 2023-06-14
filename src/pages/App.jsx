import React from "react";
import { BrowserRouter } from "react-router-dom";

// pages
import Router from "./Router";


function App() {

  return (
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
  );
}

export default App;
