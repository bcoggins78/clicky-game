import React from 'react'

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
        <div>
            <div className="card" style={styles.card}>
                <img style={styles.picture} src={props.image} className="card-img-top" alt={props.name} />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">Actor: {props.actor}</p>
                    
                </div>
            </div>
        </div>
    )
}

export default PictureCard