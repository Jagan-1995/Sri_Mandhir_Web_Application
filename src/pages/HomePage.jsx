import React from "react";
import "./homePage.css";
import hero from "../static/images/img_hero_artwork_en.png";
import playStore from "../static/images/img_playstore_logo.svg";
import appStore from "../static/images/img_appstore_logo.svg";

export default function HomePage() {
  return (
    <div>
      <section className="hero">
        <div className="left-section">
          <p>WORLD'S LARGEST APP FOR HINDU DEVOTEES</p>
          <h1>
            Pray daily with <span className="highlight">Sri Mandir</span>.
          </h1>
          <h1>One App for all your devotional needs.</h1>
          <div className="download-buttons">
            <img src={playStore} alt="PlayStore" />
            <img src={appStore} alt="appStore" />
          </div>
        </div>
        <div className="right-section">
          <img src={hero} alt="image" className="hero_img" />
        </div>
      </section>
    </div>
  );
}
