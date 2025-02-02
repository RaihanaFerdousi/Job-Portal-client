import React from "react";
import logo from "../../assets/images/jop-portal.png"

const Footer = () => {
  return (
    <footer className="footer bg-base-200 text-base-content p-10 mt-20">
      <aside>
        <img src={logo} alt="" />
        <p>
          Job Portal Ltd.
          <br />
          Providing reliable Jobs since 1992
        </p>
      </aside>
      <nav>
        <h6 className="footer-title text-rose-700">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title text-rose-700">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title text-rose-700">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
