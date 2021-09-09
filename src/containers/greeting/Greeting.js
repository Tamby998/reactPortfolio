import React from "react";
import "./Greeting.css";
// import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import BannerImg from "./BannerImg";
import Typewriter from "typewriter-effect";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import { competitiveSites } from "../../portfolio";
export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.orange }}>
                {greeting.title}
              </h1>
              <h1 className="greeting-sub" style={{ color: theme.grayText }}>
              It's<mark data-entity="person">{greeting.sub}</mark>
              </h1>
              <h1 className="greeting-typewriter" style={{color: theme.blue}}>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Developer")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("Concepteur")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("UI/UX Designer ")
                      .pauseFor(200)
                      .start();
                  }}
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              <span
                className="greeting-text-span subTitle"
                style={{ color: theme.text }}>
                <div className="entities">
                  Passionate about <mark data-entity="web">the realization and development of web projects.</mark>{" "}
                  I naturally turned to a career as a{" "}
                  <mark data-entity="skill"> web developer.</mark> Today, I work with a{" "}
                  <mark data-entity="verb">dynamic and international</mark> team on <mark data-entity="#">web projects</mark>
                </div>
              </span>
              <CompetitiveSites logos={competitiveSites.competitiveSites} />
              <div className="button-greeting-div">
                <Button text="Contact me" href="/contact" />
                <Button
                  text="Download my CV"
                  newTab={true}
                  href={greeting.resumeLink}
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <BannerImg />
          </div>
        </div>
      </div>
    </Fade>
  );
}
