import * as React from "react";
import { Link } from "gatsby";

import logo from "../img/logo-reverse.png";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";

const Footer = () => {

    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: "100vw" }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
              </div>
              <div className="column is-4">
                <Link to="/" className="f" title="footer-logo">
                  <img className="logo-img" src={logo} alt="The Gentleman Designer" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
