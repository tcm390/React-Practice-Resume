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

                <a href="https://lets-go-trader-joes.com/" >
                    <div className="project-item">
                        <img
                            src="img/projectImage/traderjoe.png"
                            alt=""
                            className="project-img"
                        />
                        <h4>Let's Go! Trader Joe's</h4>
                        <div class="project-des-container">
                            <span className="des">Let's Go! Trader Joe's is a review website. In this website, you can find what's the newest product in this season, haul videos and rating from true customer's reviews.  </span>
                            <span className="techUsed">React JS / Redux / Node.js / Semantic UI / MongoDB / RESTful API / beautiful soup</span>
                        </div>

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
                        <div class="project-des-container">
                            <span className="des">kidown.io is a real-time multiplayer game in which your goal is to eliminate your opponent and trying to get the highest score</span>
                            <span className="techUsed">WebSocket / Three.js / Node.js / PostgreSQL / WebGL / Blender</span>
                        </div>

                    </div>
                </a>

                <a href="https://flask-stockportfolioio.herokuapp.com/" >
                    <div className="project-item">
                        <img
                            src="img/projectImage/stock.png"
                            alt=""
                            className="project-img"
                        />
                        <h4>StockPortfolio.io</h4>
                        <div class="project-des-container">
                            <span className="des">A web application for managing a stock portfolio via Python 3 and Flask</span>
                            <span className="techUsed">Flask-SQLAlchemy / Flask / Chart.js / Travis CI / pytest / Bootstrap</span>
                        </div>
                    </div>
                </a>
                <a href="https://www.newgrounds.com/portal/view/814405" >
                    <div className="project-item">
                        <img
                            src="img/projectImage/rubber.jpg"
                            alt=""
                            className="project-img"
                        />
                        <h4>Digital Rubber Toy</h4>
                        <div class="project-des-container">
                            <span className="des">Digital Rubber toy is a web application of rubber digital toy</span>
                            <span className="techUsed">HTML / CSS / Javascript / WebGL</span>
                        </div>
                    </div>
                </a>
                <a href="https://tcm-portfolio.netlify.app/" >
                    <div className="project-item">
                        <img
                            src="img/projectImage/portfolio.png"
                            alt=""
                            className="project-img"
                        />
                        <h4>My Personal Portfolio</h4>
                        <div class="project-des-container">
                            <span className="des">An original, gamified personal portfolio built with Three.js and Cannon.js</span>
                            <span className="techUsed">Three.js / Cannon.js / Blender / WebGL</span>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/tcm390/Hadoop_Project/blob/master/RBDA_Paper.pdf" >
                    <div className="project-item">
                        <img
                            src="img/projectImage/hadoop.png"
                            alt=""
                            className="project-img"
                        />
                        <h4>Alcohol Abuse In New York State</h4>
                        <div class="project-des-container">
                            <span className="des">Hadoop based Analysis System for Alcohol Abuse</span>
                            <span className="techUsed"> Java / MapReduce / Hadoop / Apache Spark / Hive / Tableau / Spark MLlib</span>
                        </div>
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
