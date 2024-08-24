import React from "react";
import logo from "../../../public/assets/logo.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer bg-base-200 text-base-content p-10">
      <nav>
        <Image src={logo} alt="" width={100} height={60} />
        <p> Edwin Diaz is a software and web</p>
        <p> technologies engineer, a life coach </p>
        <p> trainer who is also a serial .</p>
      </nav>
      <nav>
        <h6 className="footer-title text-white">About</h6>
        <a className="link link-hover">Home</a>
        <a className="link link-hover">Service</a>
        <a className="link link-hover">Contact</a>
      </nav>
      <nav>
        <h6 className="footer-title text-white">Company</h6>
        <a className="link link-hover">Why Car doctor?</a>
        <a className="link link-hover">About</a>
      </nav>

      <nav>
        <h6 className="footer-title text-white">Support</h6>
        <a className="link link-hover">Support Center</a>
        <a className="link link-hover">Accesbility</a>
      </nav>
    </footer>
  );
};

export default Footer;
