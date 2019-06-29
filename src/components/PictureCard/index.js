import React from 'react'
import "./style.css"

const styles = {
    card: {
        width: "15rem"
    },
    picture: {
        height: "10rem"
    }
}

function PictureCard(props) {
    return (
        // Card that contain the props from the App component and uses an onClick event to pass the id to the incrementScore function
        <div className="col-md-3" title={props.actor} onClick={() => props.incrementScore(props.id)}>
            <div className="card" style={styles.card}>
                <img style={styles.picture} src={props.image} className="card-img-top" alt={props.name} />
            </div>
        </div>
    )
}

export default PictureCard