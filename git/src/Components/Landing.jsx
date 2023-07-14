import React from "react";
import "../Styles/landing.css"
import girlimage from "../Images/laptop_girl.png"
import folderimage from "../Images/folder_image.png"
import statusimage from "../Images/statusbar.png"
import gitsymbol from "../Images/git_symbol.png"
import git_black from "../Images/git_s_black.png"
import { BsGlobe2 } from "react-icons/bs";
import { BsCCircle } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";



function Landing() {
    return (
        <>
            <div id="landing-parent">
                <div className="l-navbar">
                    <div>
                        <img className="gitsymbol" src={gitsymbol} alt="github_socials" />
                    </div>
                    <div className="btns">
                        <button>Register</button>
                        <button>Login</button>
                    </div>

                </div>
                <div id="section-parent">
                    <div className="section">
                        <div>
                            <img className="girl-image" src={girlimage} alt="girl" />
                        </div>
                        <div className="s1-texts">
                            <h1>Discover</h1>
                            <h1>Explore</h1>
                            <h1>Analyze</h1>
                            <p>a powerful web application that enables users to easily exploreand discover repositories and user profiles on GitHub</p>
                            <div>
                                <p>let's Explore</p>
                                <p><BsArrowRight id="right-arrow"/></p>
                                
                            </div>

                        </div>

                    </div>
                    <div className="section">
                        <div className="s2-texts">
                            <p>With seamless integration with the GitHub API, our project provides a user-friendly interface
                                to search for GitHub users and access detailed information about their
                                repositories and activities.</p>
                        </div>
                        <div>
                            <img className="folderimage" src={folderimage} alt="folder" />
                        </div>

                    </div>
                    <div className="section">
                        <div>
                            <img className="statusbar" src={statusimage} alt="status" />
                        </div>
                        <div className="s3-texts">
                            <p>effortlessly coordinate and connect
                                for virtual meetings, eliminating the
                                challenges of coordinating time
                                zones and availability.</p>
                            <p>Whether it’s a professional conference
                                or a casual virtual meet-up easily
                                schedule and join virtual meetings,
                                fostering effective collaboration
                                and communication regardless of
                                geographical distances</p>

                        </div>

                    </div>

                </div>
                <div id="l-footer">
                    <img className="git_black_symbol" src={git_black} alt="gti_symbol" />
                    <div className="bottom-footer">
                        <div className="footer-details">
                            <p>legal</p>
                            <p>Privacy Policy</p>
                            <p>Privacy Center</p>
                            <p>Cookies</p>
                            <p>Your Privacy Choices</p>
                        </div>
                        <div>
                            <p> <span><BsGlobe2 id="globe" /></span>India</p>
                            <p><span><BsCCircle id="cc"/></span>2023 Github_socials</p>
                        </div>
                    </div>

                </div>


            </div>

        </>
    )
}

export default Landing