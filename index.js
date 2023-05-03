const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

const chefs = require('./chefs.json');
const chefDetails = require('./chefDetails.json');
const recipes = require('./recipes.json');


app.use(cors());

app.get('/', (req, res) => {
    res.send('Ranna is cooking....')
});
app.get('/chefs', (req, res) => {
    res.send(chefs);
})

app.get('/chefDetails', (req, res) => {
    res.send(chefDetails);
})
app.get('/chefDetails/:id', (req, res) => {
    const id = req.params.id;
    const sellectChef = chefDetails.find(n => n.id == id);
    res.send(sellectChef);
})

app.get('/recipes', (req, res) => {
    res.send(recipes);
})
app.get('/recipeDetails/:id', (req, res) => {
    const id = req.params.id;
    const selectRecipe = recipes.find(r => r.category_id ==id);
    res.send(selectRecipe);
})

app.listen(port, () => {
    console.log(`Ranna is cooking on: ${port}`);
})