import axios from 'axios';

// setSecretWord is a callback
export const getSecretWord = async setSecretWord => {
    const response = await axios.get('http://localhost:3030');
    setSecretWord(response.data);
};

// default xport for ez mocking
export default {
    getSecretWord
}