import React from "react";
import ReactPlayer from "react-player";
import "../styles/ProjectPage.css";
import logo from "../assets/projects/atmf/logo.png";
import DiscordLogo from "../helpers/DiscordLogo";
import BlenderLogo from "../helpers/BlenderLogo";
import UnityLogo from "../helpers/UnityLogo";
import CSharpLogo from "../helpers/CSharpLogo";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";

//#region ATMF IMAGES
import image1 from "../assets/projects/atmf/image1.png";
import image2 from "../assets/projects/atmf/image2.png";
import image3 from "../assets/projects/atmf/image3.png";
import image4 from "../assets/projects/atmf/image4.png";
import image5 from "../assets/projects/atmf/image5.png";
import image6 from "../assets/projects/atmf/image6.png";
//#endregion

function ATMF() {
  return (
    <div className="projectPage" id="ATMF">
      <div className="mediaContent">
        <Carousel showThumbs={false} dynamicHeight={true}>
          <iframe
            width="560"
            height="405"
            src="https://www.youtube.com/embed/-XpHuNfeMX0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <img src={image2} />
          <img src={image3} />
          <img src={image4} />
          <img src={image5} />
          <img src={image6} />
        </Carousel>
      </div>
      <div className="content">
        <div className="header">
          <img src={logo} alt="" style={{ height: "100px" }} />
          {/* Aliens Took My Friend */}
        </div>
        <div className="body" style={{ whiteSpace: "pre-line" }}>
          &emsp;&emsp;&emsp;&emsp;<i>Aliens Took My Friend</i> is a short
          top-down adventure game a friend and I developed where your fellow
          astronaut friend has been kidnapped and taken onto an alien spaceship.{" "}
          It was developed in <strong>less than 36 hours</strong> for the
          KnightHacks 2021 hackathon, where we were awarded{" "}
          <strong>Best Space App</strong> by the United States Space Force,
          which sponsored the event{" "}
          <a
            className="body-link"
            href="https://devpost.com/software/spacegame-pxqdgv"
            target="_blank"
            rel="noopener noreferrer"
          >
            (more info)
          </a>
          .{"\n\n"}
          &emsp;&emsp;&emsp;&emsp;In this game, it is your moral duty to save
          your friend from these hostile extraterrestrials by using your
          levitating laser gun to rid of them for good. Beware, the aliens have
          differing movement speeds, patterns, and attacks. Progress through
          several rooms and defeat the final alien boss to save your friend!
          {"\n\n"}
          &emsp;&emsp;&emsp;&emsp;We used Unity and its default version control
          system to distribute work amongst each other. We communicated through
          Discord and made sure to discuss any roadblocks we encountered.
          {"\n\n"}
          &emsp;&emsp;&emsp;&emsp;My friend and I both contributed equally to
          programming and designing the game, however my personal contributions
          are as follows:
          <ul>
            <li>Programming character movement, shooting, and room logic.</li>
            <li>
              Designing and Modeling <strong>all</strong> models using Blender.
            </li>
            <li>Producing and arranging the game's music.</li>
          </ul>
        </div>
      </div>
      <div className="tech">
        <div className="tech-header">technologiesUsed</div>
        <div className="tech-content">
          <div className="tech-images">
            <UnityLogo />
            <CSharpLogo />
            <BlenderLogo />
            {/* <DiscordLogo /> */}
          </div>
        </div>
      </div>
      <div className="links">
        <div className="links-header">links</div>
        <div className="links-body">
          <div className="project-link">
            <a
              href="https://github.com/ricardocolom64/AliensTookMyFriend"
              target="_blank"
              rel="noopener noreferrer"
            >
              github repository
            </a> <i class="fa fa-github"></i>
          </div>
          <div className="project-link">
            <a href="/projects/atmf/play">play on this site</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ATMF;
