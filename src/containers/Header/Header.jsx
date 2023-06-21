import React from "react";
import { Link } from "react-router-dom";
import { BsSearch, BsBag } from "react-icons/bs";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";

// helpers
import { HEADER_NAVIGATION_LINKS } from "./constants";

// assets
import "../../assets/styles/containers/header.scss";


function Header() {

  return (
    <header className="mdst-header">
      <div className="mdst-header__header">
        <Link to="/" className="mdst-header__logo">
          MOODY STUDIO
        </Link>
        <div className="mdst-header__actions">
          <span className="mdst-header__actions__item">
            <BsSearch/>
          </span>
          <span className="mdst-header__actions__item">
            <AiOutlineUser/>
          </span>
          <span className="mdst-header__actions__item">
            <BsBag/>
          </span>
          <span className="mdst-header__actions__item">
            <AiOutlineHeart/>
          </span>
        </div>
      </div>
      <nav className="mdst-header__navigation">
        {
          HEADER_NAVIGATION_LINKS.map((link, index) => (
            <Link
              key={`${index}-${link.label}`}
              to={link.value}
              className="mdst-header__navigation__link"
            >
              {link.label}
            </Link>
          ))
        }
      </nav>
    </header>
  )
};

export default Header;
