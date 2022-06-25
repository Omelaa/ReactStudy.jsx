const baseURL = process.env.REACT_APP_API_JSON;
const spaceUrl = process.env.REACT_APP_API_SPACEX;

const urls = {
    users: '/users',
    launches: '/v3/launches'
};

export {baseURL, spaceUrl, urls};