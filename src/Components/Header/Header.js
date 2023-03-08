import React from "react";
import logo from "../Resources/images/icons/logo-sm.png";
import search from "../Resources/images/icons/search-icon-sm.png";
import cart from "../Resources/images/icons/cart-sm.png";
import NavbarLists from "./NavbarLists";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="nav-wrapper fixed-top">
      <div className="container">
        <nav className="navbar navbar-toggleable-sm navbar-expand-md">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            ☰
          </button>

          {/*All anchor tags are replace by Link and to by importing Link from "react-router-dom"*/}

          <Link className="navbar-brand mx-auto" to="/">
            {" "}
            <img src={logo} />
          </Link>

          <div className="navbar-collapse collapse">
            <ul className="navbar-nav nav-justified w-100 nav-fill">
              <NavbarLists LinkUrl="/mac" LinkName="Mac" />
              <NavbarLists LinkUrl="/iphone" LinkName="iphone" />
              <NavbarLists LinkUrl="/ipad" LinkName="ipad" />
              <NavbarLists LinkUrl="/watch" LinkName="watch" />
              <NavbarLists LinkUrl="/tv" LinkName="tv" />
              <NavbarLists LinkUrl="/Music" LinkName="Music" />
              <NavbarLists LinkUrl="/Support" LinkName="Support" />
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/search/">
                  <img src={search} />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/cart/">
                  <img src={cart} />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
