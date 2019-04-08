import React from 'react'
import "./Travel.css"

const Travel = ({destination, contry, photo, distance}) => {
    // en JS pure avant le return et apres c'est du psuedo HTML(JSX)
    return (
    <div className = "App"> 
        <h1>{destination}</h1>
        <h2>{contry}</h2>
        <img src={photo} alt={photo} />
        <h2>{distance}</h2>
    </div>
    )  
}
export default Travel