import React from "react";
import "./About.css";
import me from "../../img/guneste.jpg";
import award from "../../img/award.png";
const About = () => {
  return (
    <div className="container">
      <div className="col row-left">
        <div className="row row-card bg"></div>
        <div className="row row-card">
          <img src={me} alt="" />
        </div>
      </div>
      <div className="col row-right">
        <h1 className="row-right-title">About me</h1>
        <h3 className="row-right-sub">
          If you’re building a maximalist portfolio, check out:
        </h3>
        <p className="row-right-desc">
          Şenay Akagündüz specializes in UI/UX design and game development, and
          his portfolio is a great showcase of his abilities — and more
          importantly her personality as a designer. Şenay leans into colorful,
          maximalist design with fun elements like hover animations, a
          rainbow-gradient color scheme, and wacky graphics such as pineapples
          and dolphins. In a world where clean and minimalist design is often
          favored, it’s great to see designers who step out of the box and be
          able to clearly showcase their work while still bringing in their
          personality and fun.
        </p>
        <div className="a-award">
          <img src={award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              Şenay’s portfolio is a great example of using bold color, but
              still having a clean and streamlined site.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
