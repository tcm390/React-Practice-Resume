import React, { useEffect } from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScollService';
import Animations from '../../utilities/Animation';
import Scene from '../../Components/Three/threeAnimate';
import "./AboutMe.css";
export default function AboutMe(props) {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) {
            return;
            Animations.animations.fadeInScreen(props.id);
        }
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn._subscribe(fadeInScreenHandler);


    const SCREEN_CONSTANTS = {
        description: "Hello! My name is Joe. I'm currently looking for opportunities in Web Development. I enjoy spending my free time increasing my knowledge of Web Development and building new and challenging projects using MERN and many Front end Technologies. I’m so excited to get hands-on experience as a software developer and use my technical expertise for more large projects with higher impact.",
        highlights: {
            bullets: [
                "Full Stack web development",
                "React.js",
                "Redux for State Mnanagement",
                "Building REST API",
                "Three.js and WebGL",
                "Managing database"
            ],
            heading: "Hear are a Few Highlights:"
        }
    }
    const renderHighlight = () => {
        return (
            SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
                <div className="highlight" key={i}>
                    <div className="highlight-blob">

                    </div>
                    <spa>{value}</spa>
                </div>
            ))
        )
    }
    return (
        <div className="about-me-container screen-container " id={props.id || ""}>
            <div className="about-me-parent">
                <ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'} />
                <div className="about-me-card">
                    <div className="about-me-profile">
                        <Scene />
                    </div>
                    <div className="about-me-details">
                        <span className="about-me-description">{SCREEN_CONSTANTS.description}</span>
                        <div className="about-me-highlights">
                            <div className="highlight-heading">
                                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                            </div>
                            {renderHighlight()}
                        </div>
                        <div className="about-me-options">
                            <button className="btn primary-btn" onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                                {""}
                                Hire Me{" "}
                            </button>
                            <a href="tcmResume.pdf" download="tcmResume.pdf">
                                <button className="btn highlighted-btn">
                                    Get Resume
                            </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
