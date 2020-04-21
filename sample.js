const axios = require('axios');


axios.get('https://big-calorie.herokuapp.com/api/searchFoods/orange').then((res) => {
    console.log(res);
});
