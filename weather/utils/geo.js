const axios = require('axios');

const location='London';
const url = 'https://api.openweathermap.org/geo/1.0/direct?q='+location+'&limit=1&appid=eef5e1fe9afcb03678af847eb5993174';

axios.get(url)
    .then(function (response){
        console.log(response.data[0].name+" is in "+response.data[0].lat+ " "+response.data[0].lon);
    })
    .catch(function (error){
        console.log(error);
    });
