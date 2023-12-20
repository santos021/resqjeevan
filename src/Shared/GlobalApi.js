const { default: axios } = require("axios");

const getGooglePlace=(lat,lng)=>axios.get('/api/googleplace?&lat='+lat+'&lng='+lng)

export default{
    getGooglePlace
}