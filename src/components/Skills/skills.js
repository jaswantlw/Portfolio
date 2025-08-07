import React from "react";
import "./skills.css";
import frontendDev from "../../assets/website-design.png";
import backendDev from "../../assets/ui-design.png";
import aiDev from "../../assets/app-design.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">
        What I add?
      </span>

      <span className="skillDesc">
        I'm a passionate Web Developer skilled in
        React, JavaScript, and Node.js, with a
        focus on building clean, responsive, and
        user-friendly web apps. I love turning
        ideas into real digital experiences and
        continuously explore new tools to level up
        my craft.
      </span>

      <div className="skillBars">
        <div className="skillBar">
          <img
            className="skillBarImg"
            src={frontendDev}
            alt="frontendDev"
          />
          <div className="skillBarText">
            <h2>Frontend Magic</h2>
            <p>
              I craft responsive and engaging UIs
              with React.js and modern web tools.
            </p>
          </div>
        </div>

        <div className="skillBar">
          <img
            className="skillBarImg"
            src={backendDev}
            alt="backendDev"
          />
          <div className="skillBarText">
            <h2>Backend Logic</h2>
            <p>
              I develop secure, scalable APIs and
              databases using Node.js and MongoDB.
            </p>
          </div>
        </div>

        <div className="skillBar">
          <img
            className="skillBarImg"
            src={aiDev}
            alt="aiDev"
          />
          <div className="skillBarText">
            <h2>AI Features</h2>
            <p>
              I integrate smart AI tools like NLP
              and automation into real apps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
