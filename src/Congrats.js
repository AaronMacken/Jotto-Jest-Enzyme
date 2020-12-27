import React from 'react';
import PropTypes from 'prop-types';


    const Congrats = (props) => {
    if (props.success) {
        return (
        <div className="success alert alert-success">
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

Congrats.propTypes = {
    success: PropTypes.bool,
}

export default Congrats;
