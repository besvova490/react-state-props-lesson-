import React from "react";

// containers
// import AuthForm from "./container/AuthForm";
import AuthFormAntd from "./container/AuthFormAntd";
// import Button from "./elements/Button";
import ProductsList from "./container/ProductsList";


function App() {

  return (
    <div className="App">
      <AuthFormAntd/>
      <ProductsList/>
    </div>
  );
}

export default App;
