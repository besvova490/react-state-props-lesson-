import React from "react";

// components
// import ShowHide from "./components/ShowHide";
import SongsList from "./container/SongsList";
import EditableSongsList from "./container/EditableSongsList";


function App() {

  return (
    <div className="App">
      {/* <ShowHide/> */}
      <SongsList/>
      <EditableSongsList/>
    </div>
  );
}

export default App;
