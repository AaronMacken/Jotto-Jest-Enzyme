import { getLetterMatchCount } from './';

describe('.getLetterMatchCount', () => {
    const secretWord = 'fleeb';

    test('returns the correct count when thete are no matching letters', () => {
        const letterMatchCount = getLetterMatchCount('snack', secretWord);

        expect(letterMatchCount).toBe(0);
    });

    test('returns the correct count when there are 3 matching letters', () => {
        const letterMatchCount = getLetterMatchCount('flea', secretWord);

        expect(letterMatchCount).toBe(3);
    });

    test('returns the correct count when there are duplicate letters in the guess', () => {
        const letterMatchCount = getLetterMatchCount('fluff', secretWord);

        expect(letterMatchCount).toBe(2);
    });
});