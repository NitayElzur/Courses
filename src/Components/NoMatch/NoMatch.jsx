import "./NoMatch.css"
import React from "react"
import { Link } from "react-router-dom"

function NoMatch(){

return(
<>
<div>
    <div id="error-header">
        <p>Error 404</p>
        <p>Sorry, page not found</p>
    </div>
    <div id="link-back-home">
        <Link to="/">Back to Hompe page</Link>
    </div>
</div>
</>
)
}

export default NoMatch