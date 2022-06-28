import React, { useEffect, useState } from "react";
import { Row, Container, Col } from "reactstrap";
import Trail from "../components/Trail";
import "../css/trail.css"
import { Link } from "react-router-dom";
const Search = () => {

    const [keyword, setKeyword] = useState("");

    const onTextChange = (event) => {
        const {target : {value}, } = event;
        setKeyword(value);
    }
    return (
        <>
        <Row>
            <textarea
                id = "searchbar"
                type="text"
                value={keyword}
                onChange={onTextChange}
                placeholder="Where do you want to go?"
                cols = {80}
                rows = {2}
            />
            <button> Search</button> 
        </Row>
        <h1>Recommended Trails</h1>
        <Row id="trails">
            <Link to = "/trails/Recommended-for-Beginners" className = "navigation-item" id = "Recommended-for-Beginners">
                <Trail title = "Recommended for Beginners" name = "indianRock" description = "cool!" />
            </Link>
            <Trail title = "Recommended for Beautiful Views " name = "soda" description = "hard :(!" />
            <Trail title = "Recommended for Experts" name = "mtdiablo" description = "view!!!" />
        </Row>
        <h1>Intro to city walking</h1>
        <Row id="trails">
            <Trail title = "Become Albert Einstein" name = "lawrence" description = "best way to tour Berkeley Lab" />
            <Trail title = "Recommended for Beautiful Views " name = "soda" description = "hard :(!" />
            <Trail title = "Recommended for Experts" name = "mtdiablo" description = "view!!!" />
        </Row>
        <div className="placeholder" />

        </>
    )
}

export default Search