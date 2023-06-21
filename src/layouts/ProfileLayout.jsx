import React from "react";


function ProfileLayout({ children }) {
  return (
    <div>
      <header>

      </header>
      <main>
        { children }
      </main>
      <div>
        weather widget
      </div>
    </div>
  )
};

export default ProfileLayout;
