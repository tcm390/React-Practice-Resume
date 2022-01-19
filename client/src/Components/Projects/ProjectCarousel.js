import React from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScollService';
import Animations from '../../utilities/Animation';
import Carousel from "react-elastic-carousel";
import shape from "../../assets/shape-bg.png";
import './ProjectCarousel.css';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

export default function ProjectCarousel(props) {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeScreen !== props.id) {
            return
            Animations.animations.fadeInScreen(props.id);
        }
    }

    const fadeInSubscription = ScrollService.currentScreenFadeIn._subscribe(fadeInScreenHandler);
    return (
        <div className="project-container">
            <br />
            <ScreenHeading title={'Projects'} subHeading={'What I did'} />
            <Carousel breakPoints={breakPoints} className="project-carousel" >

                <a href="https://www.kidown.io" >
                    <div className="project-item">
                        <img
                            src="img/projectImage/kidown.jpg"
                            alt=""
                            className="project-img"
                        />
                        <h4>kidown.io</h4>
                        <span className="des">kidown.io is a real-time multiplayer game in which your goal is to eliminate your opponent and trying to get the high score</span>
                        <span className="techUsed">WebSocket / Three.js / Node.js / PostgreSQL / WebGL / Blender</span>
                    </div>
                </a>

                <a href="https://www.kidown.io" >
                    <div className="project-item">
                        <img
                            src="img/projectImage/kidown.jpg"
                            alt=""
                            className="project-img"
                        />
                        <h4>kidown.io</h4>
                        <span className="des">kidown.io is a real-time multiplayer game in which your goal is to eliminate your opponent and trying to get the high score</span>
                        <span className="techUsed">WebSocket / Three.js / Node.js / PostgreSQL / WebGL / Blender</span>
                    </div>
                </a>

                <a href="https://www.kidown.io" >
                    <div className="project-item">
                        <img
                            src="img/projectImage/kidown.jpg"
                            alt=""
                            className="project-img"
                        />
                        <h4>kidown.io</h4>
                        <span className="des">kidown.io is a real-time multiplayer game in which your goal is to eliminate your opponent and trying to get the high score</span>
                        <span className="techUsed">WebSocket / Three.js / Node.js / PostgreSQL / WebGL / Blender</span>
                    </div>
                </a>

                <a href="https://www.kidown.io" >
                    <div className="project-item">
                        <img
                            src="img/projectImage/kidown.jpg"
                            alt=""
                            className="project-img"
                        />
                        <h4>kidown.io</h4>
                        <span className="des">kidown.io is a real-time multiplayer game in which your goal is to eliminate your opponent and trying to get the high score</span>
                        <span className="techUsed">WebSocket / Three.js / Node.js / PostgreSQL / WebGL / Blender</span>
                    </div>
                </a>

                <a href="https://www.kidown.io" >
                    <div className="project-item">
                        <img
                            src="img/projectImage/kidown.jpg"
                            alt=""
                            className="project-img"
                        />
                        <h4>kidown.io</h4>
                        <span className="des">kidown.io is a real-time multiplayer game in which your goal is to eliminate your opponent and trying to get the high score</span>
                        <span className="techUsed">WebSocket / Three.js / Node.js / PostgreSQL / WebGL / Blender</span>
                    </div>
                </a>

                <a href="https://www.kidown.io" >
                    <div className="project-item">
                        <img
                            src="img/projectImage/kidown.jpg"
                            alt=""
                            className="project-img"
                        />
                        <h4>kidown.io</h4>
                        <span className="des">kidown.io is a real-time multiplayer game in which your goal is to eliminate your opponent and trying to get the high score</span>
                        <span className="techUsed">WebSocket / Three.js / Node.js / PostgreSQL / WebGL / Blender</span>
                    </div>
                </a>




            </Carousel>
            <section className='project-carousel-section' id={props.id || ""}>
                {/* <h1 style={{ textAlign: "center" }}>Example to setup your carousel in react</h1> */}
                <div className="App">

                </div>


            </section>
            <div className="footer-image">
                <img src={shape} alt="Phot0 not responding" />
            </div>

        </div>
    );
}
