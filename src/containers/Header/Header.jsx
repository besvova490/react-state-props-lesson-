import React from "react";
import { Badge } from "antd";
import { Link } from "react-router-dom";
import { BsSearch, BsBag } from "react-icons/bs";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { useSelector } from "react-redux";

// helpers
import { HEADER_NAVIGATION_LINKS } from "./constants";

// assets
import "../../assets/styles/containers/header.scss";


function Header() {
  const wishList = useSelector(state => state.wishList);

  console.log(wishList.items);

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
          <Link to="/profile" className="mdst-header__actions__item">
            <AiOutlineUser/>
          </Link>
          <span className="mdst-header__actions__item">
            <BsBag/>
          </span>
          <Badge count={wishList.items.length} showZero>
            <Link to="/whish-list" className="mdst-header__actions__item">
              <AiOutlineHeart/>
            </Link>
          </Badge>
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
