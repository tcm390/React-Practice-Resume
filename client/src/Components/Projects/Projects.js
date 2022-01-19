import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScollService';
import Animations from '../../utilities/Animation';
import shape from "../../assets/shape-bg.png";

import './Projects.css';

export default function Projects(props) {

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeScreen !== props.id) {
            return
            Animations.animations.fadeInScreen(props.id);
        }
    }
    const onClickImage=()=>{
        alert('hi');
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn._subscribe(fadeInScreenHandler);

    const options = {
        loop: true,
        margin: 0,
        nav: true,
        animateIn: "bounceInRight",
        animateOut: "bounceOutRight",
        dots: "true",
        autoplay: true,
        smartSpeed: 2000,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 3
            },
        }
    }
    return (
        <div>
            <ScreenHeading title={'Projects'} subHeading={'What I did'} />
            <section className='project-section' id={props.id || ""}>
                <div className="container">
                    <div className="row">
                        <OwlCarousel className="owl-carousel" id="project-carousel" {...options}>

                            <div className="col-lg-12">
                                <div className="project-item">
                                    <div className="project-comment">
                                        <p> 
                                            kidown io good!!!!!
                                        </p>

                                    </div>
                                    <div className="client-info">
                                        <img src="img/projectImage/kidown.jpg" alt=""  onClick={onClickImage}/>
                                        <h5>Let's Go! Trader Joe's</h5>
                                        <p>Technologies used:Three.js, WebGL, PosgreSQL, WebSocket </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="project-item">
                                    <div className="project-comment">
                                        <p>
                                            
                                            kidown io good!!!!!
                                            
                                        </p>

                                    </div>
                                    <div className="client-info">
                                        <img src="img/projectImage/kidown.jpg" alt="" />
                                        <h5>kidown.io</h5>
                                        <p>Technologies used:Three.js, WebGL, PosgreSQL, WebSocket </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="project-item">
                                    <div className="project-comment">
                                        <p>
                                            
                                            kidown io good!!!!!
                                            
                                        </p>

                                    </div>
                                    <div className="client-info">
                                        <img src="img/projectImage/kidown.jpg" alt="" />
                                        <h5>kidown.io</h5>
                                        <p>Technologies used:Three.js, WebGL, PosgreSQL, WebSocket </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="project-item">
                                    <div className="project-comment">
                                        <p>
                                            
                                            kidown io good!!!!!
                                            
                                        </p>

                                    </div>
                                    <div className="client-info">
                                        <img src="img/projectImage/kidown.jpg" alt="" />
                                        <h5>kidown.io</h5>
                                        <p>Technologies used:Three.js, WebGL, PosgreSQL, WebSocket </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="project-item">
                                    <div className="project-comment">
                                        <p>
                                            
                                            kidown io good!!!!!
                                            
                                        </p>

                                    </div>
                                    <div className="client-info">
                                        <img src="img/projectImage/kidown.jpg" alt="" />
                                        <h5>kidown.io</h5>
                                        <p>Technologies used:Three.js, WebGL, PosgreSQL, WebSocket </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="project-item">
                                    <div className="project-comment">
                                        <p>
                                            
                                            kidown io good!!!!!
                                            
                                        </p>

                                    </div>
                                    <div className="client-info">
                                        <img src="img/projectImage/kidown.jpg" alt="" />
                                        <h5>kidown.io</h5>
                                        <p>Technologies used:Three.js, WebGL, PosgreSQL, WebSocket </p>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </section>
            <div className="footer-image">
                <img src={shape} alt="Phot0 not responding" />
            </div>
        </div>
    );
}
