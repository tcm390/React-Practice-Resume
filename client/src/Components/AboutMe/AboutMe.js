import React, { useEffect } from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScollService';
import Animations from '../../utilities/Animation';
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
        description: "full stack",
        highlights: {
            bullets: [
                "Full Stack web and mobile development",
                "frontend",
                "react",
                "restApi",
                "backend",
                "frontend",
                "react",
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
