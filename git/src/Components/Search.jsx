import React from "react";
import Navbar from "../Routes/Navbar";
import sbgc from "../Images/search-bgc2.png"

function Search(){
    return (
        <>
        <div>
            <Navbar />
            <div>
                <img id="search-bgc" src={sbgc} alt="bgc" />
                <h1 className="subs">Discover   |   Explore   |   Analyze</h1>

                <div className="input-box">

                    <input className="search-box" type="text" placeholder="search for anyone here..." />
                </div>

            </div>
        </div>

        </>
    )
}

export default Search;