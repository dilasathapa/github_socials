import React from "react";
import "../Styles/navbar.css"
import gitwsymbol from "../Images/git_s_white.png"
import sbgc from "../Images/search-bgc2.png"
import { BsSearch } from "react-icons/bs";

const Navbar = () => {
    return (
        <>
            <div id="nav-parent">
                <div className="top-nav">
                    <img id="gitw" src={gitwsymbol} alt="git-symbol" />
                    <div>
                        <p>Hi! Dilasa Thapa</p>
                        <img id="dp" src="data:image/jpeg;base64,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" alt="dp" />
                    </div>
                </div>
                <div id="bottom-nav">
                    <p>Home</p>
                    <p>Calender</p>
                    <button>Log Out</button>
                </div>
            </div>
            {/* <div>
                <img id="search-bgc" src={sbgc} alt="bgc" />
                <h1 className="subs">Discover   |   Explore   |   Analyze</h1>

                <div className="input-box">

                    <input className="search-box" type="text" placeholder="search for anyone here..." />
                </div>

            </div> */}




        </>
    )
}

export default Navbar;