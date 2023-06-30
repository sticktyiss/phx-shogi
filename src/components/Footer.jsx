import React from "react";
import { BsFacebook, BsDiscord } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { IconContext } from "react-icons";
import "./css/Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <h1>Contact Us</h1>
      <a href="mailto:phoenixshogi@gmail.com">phoenixshogi@gmail.com</a>
      <p>650-SHOGI-AZ (746-4429)</p>
      <div>
        <a href="https://www.facebook.com/groups/phxshogi" target="_blank">
          <BsFacebook />
        </a>
        <a href="https://discord.gg/UVEQH9YDEk" target="_blank">
          <BsDiscord />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
