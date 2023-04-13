import React from "react";

const Container = ({ slip, onDiceClick }) => {
    return (
        <div className="container">
            <span className="number">ADVICE #{slip.id}</span>
            <span className="advice">"{slip.advice}"</span>
            <img className="divider" src="/images/pattern-divider-desktop.svg" alt="divider"/>
            <div 
                className="dice-btn"
                onClick={onDiceClick}
            >
                <img src="/images/icon-dice.svg" alt="dice-img" />
            </div>
        </div>
    )
}

export default Container;