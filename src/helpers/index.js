export function getLetterMatchCount(guessedWord, secretWord) {
  const secretLetterSet = new Set(secretWord.split(""));
  const gussedLetterSet = new Set(guessedWord.split(""));

  return [...secretLetterSet].filter((letter) => gussedLetterSet.has(letter)).length;
}
