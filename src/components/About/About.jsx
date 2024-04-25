// About.jsx
import React from "react";
import "./About.css";
import landscapeImg1 from "../../assets/image1.jpeg";
import portraitImg1 from "../../assets/image2.jpeg";
import portraitImg2 from "../../assets/image3.jpeg";
import portraitImg3 from "../../assets/image4.jpeg";
import portraitImg4 from "../../assets/image5.jpeg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-description">
          <div className="about-subtitle">HI THERE! I'M SOUMYA!</div>
          <div>
            I'm currently a first year MFA student at
            <span className="bold"> Parsons School of Design</span> studying
            Design & Technology with a focus in Creative Coding & Data
            Visualization. Previously, I studied Applied Math-Computer Science
            at
            <span className="bold"> Brown Univerity</span>. I want to combine
            code, design and AI to create beautiful, efficient products and
            solutions. I love to chat about design, boutique coffee shops, Harry
            Potter or pretty much anything, so reach out to me at
            karws352@newschool.edu.
          </div>
          <div id="dev">
            Development Languages & Libraries: JavaScript, HTML/CSS, Java,
            Python, p5.js, d3.js, matter.js, leaflet.js, react.js.
          </div>
        </div>
        <div className="image-grid">
          <figure className="landscape">
            <img src={landscapeImg1} alt="Landscape 1" />
            <figcaption>There's no place like home: Mumbai, India.</figcaption>
          </figure>
          <figure className="portrait">
            <img src={portraitImg1} alt="Portrait 1" />
            <figcaption>My Alma Mater: Brown University.</figcaption>
          </figure>
          <figure className="portrait">
            <img src={portraitImg2} alt="Portrait 2" />
            <figcaption>
              I've been singing for as long as I can remember!
            </figcaption>
          </figure>
          <figure className="portrait">
            <img src={portraitImg3} alt="Portrait 3" />
            <figcaption>My love for trying new food ;)</figcaption>
          </figure>
          <figure className="portrait">
            <img src={portraitImg4} alt="Portrait 4" />
            <figcaption>Learning something new...</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default About;
