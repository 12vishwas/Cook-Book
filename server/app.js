const express = require('express')
const fs = require('fs')

const recipes = require("./recipe.json")
const { urlencoded } = require( 'body-parser')
const cors = require('cors');


const app = express()
const port = process.env.PORT || 3000;

//using middleware
app.use(express.urlencoded({extended: false}));
app.use(cors())

//routes
app.get('/api/recipes', (req,res) => {
    return res.json(recipes)
})

app
    .route("/api/recipes/:name")
    .get((req, res) => {
    const name = req.params.name;
    const recipe = recipes.find((recipe) => recipe.name === name);
    return res.json(recipe);
    })

  .put((req,res) => {
    const name = req.params.name;
    const recipe = recipes.find((recipe) => recipe.name === name);

    if(recipe){
        recipe.name = req.body.name || recipe.name;
        recipe.ingredients = req.body.ingredients || recipe.ingredients;
        recipe.gender = req.body.gender || recipe.gender;
        fs.writeFile("./recipe.json", JSON.stringify(recipes),(err) => {
          return res.json({status:recipe})
        })
    }
    else{
      return res.json({status:"Recipe not found"})
      }
  })

  .delete((req,res) => {
    const name = req.params.name;
    const recipe = recipes.find((recipe) => recipe.name === name);
    if(recipe){
      recipes.splice(recipes.indexOf(recipe),1);
      fs.writeFile("./recipe.json", JSON.stringify(recipes),(err) => {
        if(err){}
        return res.json({status:recipe})
        })
      }
      else{
        return res.json({status:"Recipe not found"})
        }
  })

app.post(("/api/recipes"), (req,res) => {
  const body = req.body;
  recipes.push(body);
  fs.writeFile("./recipe.json", JSON.stringify(recipes),(err) => {
    if(err){}
    return res.json({status:body})
    })
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})
