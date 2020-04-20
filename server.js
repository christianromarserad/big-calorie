const express = require('express');
const axios = require('axios');
const path = require('path');
const cors = require('cors');

//Configure axios
axios.defaults.baseURL = 'https://trackapi.nutritionix.com';
axios.defaults.headers.common['x-app-id'] = process.env.BIG_CALORIE_NUTRITIONIX_API_ID;
axios.defaults.headers.common['x-app-key'] = process.env.BIG_CALORIE_NUTRITIONIX_API_KEY;
axios.defaults.headers.common['x-remote-user-id'] = 0

const app = express();
const port = process.env.PORT;

//Adding middleware
app.use(express.json());
var corsOption = {
    origin: true
}


app.get('/api/searchFoods/:query', cors(corsOption), (req, res) => {
    console.log(req.params.query);
    axios.get('/v2/search/instant', {
        params: {
            query: req.params.query
        }
    }).then((response) => {
        res.send(response.data.common);
    });
});

app.get('/api/getFood/:query', cors(corsOption), (req, res) => {
    axios.post('/v2/natural/nutrients', {
        query: req.params.query,
        timezone: 'US/Eastern'
    }).then((response) => {
        let resultFood = response.data.foods[0];
        let food = {
            foodName: resultFood.food_name,
            serving: resultFood.serving_qty + " " + resultFood.serving_unit,
            calorie: resultFood.nf_calories,
            carb: resultFood.nf_total_carbohydrate,
            protein: resultFood.nf_protein,
            fat: resultFood.nf_total_fat,
            photo: resultFood.photo.thumb
        }

        res.send(food);
    });
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

app.listen(port, () => console.log("Listening on port: " + port));