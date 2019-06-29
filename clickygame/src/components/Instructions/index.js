import React from "react";
import "./style.css";

function Instructions() {
    return (
        <div className="background-pic mx-auto">
            <div className="container">
                <div className="jumbotron mx-auto">
                    <h1 className="display-4 align-middle text-center desc-title">Doctor Who</h1>
                    <h1 className="display-4 align-middle text-center desc-title">Clicky Game!</h1>
                    <br />
                    <p className="lead text-center description">Click on an image to earn points,</p>
                    <p className="lead text-center description">but don't click on any more than once!</p>
                    <br />
                    <p className="lead text-center description">GOOD LUCK!</p>
                </div>
            </div>
        </div>
    )
}

export default Instructions;