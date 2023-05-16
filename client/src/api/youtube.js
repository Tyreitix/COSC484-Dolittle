import axios from 'axios';
const KEY = 'AIzaSyAaW2RBZEcAWDbYTKA8YJd-ESboPQ2Wo9k'; 

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY
    }
})