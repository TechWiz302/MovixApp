import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import "./Footer.scss";
import ContentWrapper from "../contentWrapper/ContentWrapper";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae molestias cumque illum reprehenderit magni voluptate necessitatibus amet, fuga iusto repellat, sed ea corporis veniam voluptates perspiciatis sunt error? Tenetur, veritatis!
          Quibusdam nulla voluptatem, id iure asperiores veniam assumenda tempora at dolorem laudantium in fugiat ratione perferendis consequatur modi sint debitis earum ab ipsam fuga a, odio porro dolores! Officia, blanditiis.
        </div>
        <div className="socialIcons">
          <span className="icon">
            <FaFacebookF />
          </span>
          <span className="icon">
            <FaInstagram />
          </span>
          <span className="icon">
            <FaTwitter />
          </span>
          <span className="icon">
            <FaLinkedin />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;