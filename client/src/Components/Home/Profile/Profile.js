import React from 'react';
import Typical from 'react-typical';
import './Profile.scss';
import ScrollService from '../../../utilities/ScollService';
export default function Profile() {
    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <div className="colz-icon">
                            <a href="https://www.linkedin.com/in/ting-chien-meng-b221521a6/">
                                <i className="fa fa-facebook-square"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/ting-chien-meng-b221521a6/">
                                <i className="fa fa-google-plus-square"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/ting-chien-meng-b221521a6/">
                                <i className="fa fa-instagram"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/ting-chien-meng-b221521a6/">
                                <i className="fa fa-twitter"></i>
                            </a>
                        </div>
                    </div>

                    <div className="profile-details-name">
                        <span className="primary-text">
                            {" "}
                        Hello, I'm <span className="highlighted-text">Joe</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text">
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "MERN Dev 🛠",
                                        1000,
                                        "React Dev 💻",
                                        1000,

                                    ]}
                                />
                            </h1>
                            <span className="profile-role-tagline">
                                knack of building applications with front and back end operations.
                            </span>
                        </span>
                    </div>
                    <div className="profile-options">
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
                <div className="profile-picture">
                    <div className="profile-picture-background">

                    </div>
                </div>
            </div>

        </div>
    );
}
