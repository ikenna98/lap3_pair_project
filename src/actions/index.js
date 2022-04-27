import axios from 'axios';

const loading = () => ({ type: 'LOADING' });

const loadResult = (data) => ({ 
    type: 'LOAD_RESULT',
    payload: data
});

export const getResult = username => {
    return async dispatch => {
        dispatch(loading());
        try {
            const data = await fetchGitHub(username);
            dispatch(loadResult(data))
        } catch (error) {
            console.warn(error.message);
            dispatch({ type: 'SET_ERROR', payload: error.message })
        };
    };
};

//Helper
const fetchGitHub = async username => {
    try {
        const {data} = await axios.get(`https://api.github.com/users/${username}/repos`);
        return data;
    } catch (error) {
        if(error.response.status === 404){throw new Error('Not a valid username!')}
        throw Error(error.message);
    }
}
