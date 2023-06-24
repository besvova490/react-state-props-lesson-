import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet";

// router
import Router from "./Router";

// helpers
import store, { persistor } from "../redux/configStore";


function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Helmet>
            <title>MOODY STUDIO</title>
          </Helmet>
          <Router/>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
