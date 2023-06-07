import React, { useState } from "react";

// assets
import "../../assets/styles/components/show-hide.scss";


function ShowHide() {
  const [isShow, setIsShow] = useState(true);

  return (
    <div className="lsn-show-hide">
      <button
        className="lsn-show-hide__button"
        onClick={() => {
          setIsShow(state => {

            return !state
          });
        }}
      >
        { isShow ? "Hide" : "Show" } block
      </button>
      { !!isShow && <div className="lsn-show-hide__block"></div> }
    </div>
  );
}

export default ShowHide;
