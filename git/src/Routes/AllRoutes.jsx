import React from "react";
import {Route, Routes} from "react-router-dom"
import Landing from "../Components/Landing";
import Search from "../Components/Search";
import SearchedUser from "../Components/SearchedUser";



function AllRoutes(){
    return (
        <div>
            <Routes>
                <Route path="/" element={<Landing />}></Route>
                <Route path="/search" element={<Search />}></Route>
                <Route path="/searcheduser" element={<SearchedUser />}></Route>
            </Routes>
        </div>
    )
}


export default AllRoutes;