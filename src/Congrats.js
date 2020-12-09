import React from 'react';

/**
 * Functional react component for congratulatory message
 * @function
 * @returns {JSX.Element} - 
 */  

export default (props) => {
    if (props.success) {
        return (
        <div className="success">
            <span className="congratsMessage">
                Congratulations! You guessed the word!
            </span>
        </div>
        )
    }

    return (
        <div />
    )
}