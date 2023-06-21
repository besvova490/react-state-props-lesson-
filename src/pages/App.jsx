import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet";

// router
import Router from "./Router";


function App() {

  return (
    <BrowserRouter>
      <Helmet>
        <title>MOODY STUDIO</title>
      </Helmet>
      <Router/>
    </BrowserRouter>
  );
}

export default App;
