import React from "react";
import "./style.css";

function NavBar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="https://www.myclickygame.com">Doctor Who Clicky Game</a>
                
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav mx-auto">
                        <span className="nav-item nav-link mx-auto">You Guessed Correctly!</span>
                        
                        
                    </div>
                    <div className="navbar-nav mx-right">
                    <span className="nav-item nav-link">Score: 0 | Top Score: 12</span>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;