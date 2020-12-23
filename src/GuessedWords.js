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
    } else {
        const guessedWordsRows = props.guessedWords.map((word, index) => {
            return (
                <tr className="guessedWord" key={index}>
                    <td>{word.guessedWord}</td>
                    <td>{word.letterMatchCount}</td>
                </tr>
            )
        });

        contents = (
            <div className="guessedWords">
                <h3>Guessed Words</h3>
                <table>

                    <thead>
                        <tr>
                            <th>
                                Guess
                            </th>
                            <th>Matching Letters</th>
                        </tr>
                    </thead>

                    <tbody>
                        { guessedWordsRows }
                    </tbody>
                </table>
            </div>
        )
    }

    return (
        <div className='guessedWordsWrapper'>
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