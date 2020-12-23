import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = props => {
    let contents;

    if (props.guessedWords.length === 0) {
        contents = (
            <span className='guessInstructions'>
                Try to guess the secret word!
            </span>
        );
    }

    return (
        <div className='guessedWords'>
            { contents }
        </div>
    );
}

GuessedWords.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired
        })
    ).isRequired
};

export default GuessedWords;