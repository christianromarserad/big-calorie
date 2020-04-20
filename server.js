const express = require('express');
const axios = require('axios');

//Configure axios
axios.defaults.baseURL = 'https://trackapi.nutritionix.com';
axios.defaults.headers.common['x-app-id'] = "a8dfba4b";
axios.defaults.headers.common['x-app-key'] = "78c52c7f2aee4ef0ad4358ac16b84f70";
axios.defaults.headers.common['x-remote-user-id'] = 0

const app = express();
const port = 5000; //TODO move this to .env

//Adding middleware
app.use(express.json());

app.get('/api/searchFoods/:query', (req, res) => {
    console.log(req.params.query);
    axios.get('/v2/search/instant', {
        params: {
            query: req.params.query
        }
    }).then((response) => {
        res.send(response.data.common);
    });
});

app.get('/api/getFood/:query', (req, res) => {
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

app.listen(port, () => console.log("Listening on port: " + port));