import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from '../../utilities/ScollService';
import Animations from "../../utilities/Animation";

import "./Resume.css";
import educationSvg from '../../assets/Resume/education.svg';
import interestsSvg from '../../assets/Resume/interests.svg';
import programmingSkillsSvg from '../../assets/Resume/programming-skills.svg';
import projectsSvg from '../../assets/Resume/projects.svg';


const Resume = (props) => {
    /* STATES */
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});


    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;

        Animations.animations.fadeInScreen(props.id);
    };
    const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);



    const ResumeHeading = (props) => {
        return (
            <div className="resume-heading">
                <div className="resume-main-heading">
                    <div className="heading-bullet"></div>
                    <span>{props.heading ? props.heading : ""}</span>
                    {props.fromDate && props.toDate ? (
                        <div className="heading-date">
                            {props.fromDate + "-" + props.toDate}
                        </div>
                    ) : (
                            <div></div>
                        )}
                </div>
                <div className="resume-sub-heading">
                    <span>{props.subHeading ? props.subHeading : ""}</span>
                </div>
                <div className="resume-heading-description">
                    <span>{props.description ? props.description : ""}</span>
                </div>
            </div>
        );
    };

    const resumeBullets = [
        { label: "Education", logoSrc: educationSvg },
        { label: "Programming Skills", logoSrc: programmingSkillsSvg },
        { label: "Projects", logoSrc: projectsSvg },
        { label: "Interests", logoSrc: interestsSvg },
    ];

    const programmingSkillsDetails = [
        { skill: "JavaScript", ratingPercentage: 85 },
        { skill: "React JS", ratingPercentage: 85 },
        { skill: "Redux", ratingPercentage: 85 },
        { skill: "Express JS", ratingPercentage: 89 },
        { skill: "Node JS", ratingPercentage: 89 },
        { skill: "Mongo Db", ratingPercentage: 70 },
        { skill: "Java", ratingPercentage: 80 },
        { skill: "HTML", ratingPercentage: 80 },
        { skill: "CSS", ratingPercentage: 80 },
    ];

    const projectsDetails = [
        {
            title: "Let's Go! Trader Joe's",
            duration: { fromDate: "2021", toDate: "2021" },
            description:
                "A review Website of Trader Joe’s",
            subHeading: "Technologies Used: React JS, Redux, Node.js, Semantic UI, MongoDB, RESTful API, beautiful soup",
        },
        {
            title: "kidown.io",
            duration: { fromDate: "2021", toDate: "2021" },
            description:
                "A real-time multiplayer game in which your goal is to eliminate your opponent and trying to get the highest score",
            subHeading:
                "Technologies Used: WebSocket, Three.js, Node.js, PostgreSQL, WebGL, Blender",
        },
        {
            title: "StockPortfolio.io",
            duration: { fromDate: "2021", toDate: "2021" },
            description:
                "A web application for managing a stock portfolio via Python 3 and Flask",
            subHeading:
                "Technologies Used: Flask-SQLAlchemy, Flask, Chart.js, Travis CI, pytest, Bootstrap.",
        },
    ];
    const resumeDetails = [
        <div className="resume-screen-container" key="education">
            <ResumeHeading
                heading={"New York University, New York, NY"}
                subHeading={"Computer Science, Master of Science"}
                fromDate={"2020"}
                toDate={"2021"}
            />

            <ResumeHeading
                heading={"Tatung University, Taipei, Taiwan"}
                subHeading={"Computer Science, Bachelor of Science"}
                fromDate={"2014"}
                toDate={"2018"}
            />
        </div>,




        /* PROGRAMMING SKILLS */
        <div
            className="resume-screen-container programming-skills-container"
            key="programming-skills"
        >
            {programmingSkillsDetails.map((skill, index) => (
                <div className="skill-parent" key={index}>
                    <div className="heading-bullet"></div>
                    <span>{skill.skill}</span>
                    <div className="skill-percentage">
                        <div
                            style={{ width: skill.ratingPercentage + "%" }}
                            className="active-percentage-bar"
                        ></div>
                    </div>
                </div>
            ))}
        </div>,

        /* PROJECTS */
        <div className="resume-screen-container" key="projects">
            {projectsDetails.map((projectsDetails, index) => (
                <ResumeHeading
                    key={index}
                    heading={projectsDetails.title}
                    subHeading={projectsDetails.subHeading}
                    description={projectsDetails.description}
                    fromDate={projectsDetails.duration.fromDate}
                    toDate={projectsDetails.duration.toDate}
                />
            ))}
        </div>,

        /* Interests */
        <div className="resume-screen-container" key="interests">
            <ResumeHeading
                heading="Work out"
                description="Working out has taught me to be more patient. Also, I can easily forget about everything else while I work out and give my head some rest which really helps me release my stress."
            />
            <ResumeHeading
                heading="Music"
                description="Music helps me escape my worries from life, lots of songs for me have a memory linked to it, so listening to music helps me feel calm down and release my pressure."
            />
            <ResumeHeading
                heading="Video Game"
                description="I like to challenge my reflexes a lot while playing video games. Also, I like to interact with the other players so that I could make lots of new friends from other countries"
            />
        </div>,
    ];

    const handleCarousal = (index) => {
        let offsetHeight = 360;

        let newCarousalOffset = {
            style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
        };

        setCarousalOffsetStyle(newCarousalOffset);
        setSelectedBulletIndex(index);
    };
    const getBullets = () => {
        return resumeBullets.map((bullet, index) => (
            <div
                onClick={() => handleCarousal(index)}
                className={
                    index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
                }
                key={index}
            >
                <img
                    className="bullet-logo"
                    src={bullet.logoSrc}
                    alt="B"
                />
                <span className="bullet-label">{bullet.label}</span>
            </div>
        ));
    };
    const getResumeScreens = () => {
        return (
            <div
                style={carousalOffsetStyle.style}
                className="resume-details-carousal"
            >
                {resumeDetails.map((ResumeDetail) => ResumeDetail)}
            </div>
        );
    };


    return (
        <div className="about-me-container screen-container" id={props.id || ""}>
            <div className="resume-content">
                <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
                <div className="resume-card">
                    <div className="resume-bullets">
                        <div className="bullet-container">
                            <div className="bullet-icons"></div>
                            <div className="bullets">{getBullets()}</div>
                        </div>
                    </div>

                    <div className="resume-bullet-details">{getResumeScreens()}</div>
                </div>
            </div>
        </div>
    );
};

export default Resume;