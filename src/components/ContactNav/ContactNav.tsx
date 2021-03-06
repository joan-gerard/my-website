import React from "react";
import "./ContactNav.scss";

const ContactNav = () => {
  return (
    <div className="wrapper2">
      <ul className="menu2">
        <li className="list-first">
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:joan.gerard@outlook.com"
          >
            <i className="fa fa-envelope" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/joangerard/"
            className="list-second"
          >
            <i className="fab fa-linkedin" aria-hidden="true"></i>
          </a>
        </li>
        <li className="list-third">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/joan-gerard"
          >
            <i className="fab fa-github" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactNav;
