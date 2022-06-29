import React, { useEffect, useState } from "react";
import { Row, Container, Col } from "reactstrap";
import Trail from "../components/Trail";
import "../css/trail.css"
import "../css/search.css"
import { Link } from "react-router-dom";
const Search = () => {

    const [keyword, setKeyword] = useState("");
    const [didPressSearch, setDidPressSearch] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0)
    },[])

    const onTextChange = (event) => {
        const {target : {value}, } = event;
        setKeyword(value);
    }

    const onClick = (event) => {
        const {target : {value}, } = event;
        setDidPressSearch(true);
    }
    return (
        <>
            <Row>
            <textarea
                className = "searchBar"
                type="text"
                value={keyword}
                onChange={onTextChange}
                placeholder="Where do you want to go?"
                cols = {39}
                rows = {1}
            />
            <button onClick={onClick}> Search</button> 
            </Row>
            {didPressSearch ? 
            <>
            <h1>Recommended Trails</h1>
            <h1>Search Result</h1>
            <Row className="trails">
            <Link to = "/trails/Recommended-for-Beginners" className = "navigation-item">
                <Trail title = "Recommended for Beginners" name = "indianRock.jpg" description = "cool!" />
            </Link>
            </Row>

            </>
            :
            <>
            <Row className="trails">
            <Link to = "/trails/Recommended-for-Beginners" className = "navigation-item">
                <Trail title = "Recommended for Beginners" name = "indianRock.jpg" description = "cool!" />
            </Link>
            <Trail title = "Recommended for Beautiful Views " name = "soda.jpg" description = "hard :(!" />
            <Trail title = "Recommended for Experts" name = "mtdiablo.jpg" description = "view!!!" />
            </Row>
            </>
            }

        
         <div className="placeholder" />

        </>
    )
}

export default Search