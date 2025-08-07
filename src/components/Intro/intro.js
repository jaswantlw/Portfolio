import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";
import btnimg from "../../assets/hireme.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>

        <span className="introText">
          I'm{" "}
          <span className="introName">
             Jaswant
          </span>
          <br />
          Web Developer
        </span>
        <p className="introPara">
          I design and build modern, responsive
          websites <br />that blend clean design with
          functional code.
        </p>
        <Link>
          <button className="btn">
            <img className="btnimg" src={btnimg} alt="" />
            Hire me
          </button>
        </Link>
      </div>

      <img
        src={bg}
        alt="profile"
        className="bg"
      />
    </section>
  );
};

export default Intro;
