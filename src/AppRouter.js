import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Compare from "./pages/Compare";
import Gps from './pages/Gps'
import Main from './pages/Main'
import PageNotFound from './pages/PageNotFound'
import Search from "./pages/Search";
import TrailDetail from "./pages/TrailDetail";

const AppRouter = () => {
  return (
    <>
      <Router>
        <Routes>
            <Route path= "/" element ={<Main />} />
            <Route path= "/gps" element ={<Gps />} />
            <Route path= "/search" element = {<Search />} />
            <Route path= "/compare" element = {<Compare />} />
            {/* Will add dynamic routing in the future. I have no time */}
            <Route path= "/trails/Recommended-for-Beginners" element = {<TrailDetail name = "Recommended-for-Beginners"/>} />
            <Route element = {<PageNotFound />}/>
        </Routes>
        <NavigationBar/>
      </Router>
    </>
  )
}

export default AppRouter