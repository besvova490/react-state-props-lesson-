import React from "react";

// containers
import Header from "../containers/Header";


function ProfileLayout({ children }) {
  return (
    <div className="mdst-general-layout">
      <Header/>

      <h2>User Profile page</h2>
      <main className="mdst-general-layout__page-content">
        { children }
      </main>
    </div>
  )
};

export default ProfileLayout;
