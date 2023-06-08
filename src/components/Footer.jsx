import React from "react";
import { BsFacebook } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <footer>
      <IconContext.Provider value={{className: 'footerIcons', title: 'Icons'}}>
      <div className="contact">
        <h1>Contact Us</h1>
        <a href="mailto:phoenixshogi@gmail.com">phoenixshogi@gmail.com</a>
        <p>650-SHOGI-AZ (746-4429)</p>
      </div>
      <div>
        <a href="https://www.facebook.com/groups/phxshogi">
          <BsFacebook />
        </a>
      </div>
      </IconContext.Provider>
    </footer>
  );
};

export default Footer;
