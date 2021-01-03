import React from "react";
import PropTypes from "prop-types";

const Input = ({ secretWord }) => {
  // since we are going to mock this function, we are not able to destruct useState from react
  const [currentGuess, setCurrentGuess] = React.useState("");

  // TODO: update guessedWords
  // TODO: check against secretWord and update

  return (
    <div className="input">
      <form className="form-inline">
        <input
          className="inputBox mb-2 mx-sm-3"
          type="text"
          placeholder="enter guess"
          value={currentGuess}
          onChange={(e) => setCurrentGuess(e.target.value)}
        />
        <button
          className="submitButton btn btn-primary mb-2"
          onClick={(e) => {
            e.preventDefault();
            setCurrentGuess("");
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};

export default Input;
