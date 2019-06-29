import React from "react";
import "./style.css";
import Logo from "./doctor-who-logo.jpg"

function NavBar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-sm">
                <img src={Logo} alt="Doctor Who" />
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav mx-auto">
                        <span className="nav-item nav-link h5 status">{props.status}</span>
                    </div>
                    <div className="navbar-nav mx-right">
                        <span className="nav-item nav-link h5 score">Score: {props.score} | Top Score: {props.totalScore}</span>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;