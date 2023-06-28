import React from "react";

export default function Die(prop){
    const styles = {
        backgroundColor : prop.isheld ? '#59E391' : 'white'
    }
    return (
        <div onClick={prop.holdDice} className= "die--face" style={styles} >
            <h2>{prop.value}</h2>
        </div>
    )
}