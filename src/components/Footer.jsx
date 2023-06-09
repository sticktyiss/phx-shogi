import React from "react";
import { BsFacebook } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { IconContext } from "react-icons";
import './css/Footer.css'

const Footer = () => {
  return (
    <footer>
        <h1>Contact Us</h1>
        <a href="mailto:phoenixshogi@gmail.com">phoenixshogi@gmail.com</a>
        <p>650-SHOGI-AZ (746-4429)</p>
        <a href="https://www.facebook.com/groups/phxshogi">
          <BsFacebook />
        </a>
    </footer>
  );
};

export default Footer;
