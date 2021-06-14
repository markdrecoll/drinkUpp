var randomDrinkDisplay01El = document.getElementById('randomDrinkDisplay01');
var randomDrinkDisplay02El = document.getElementById('randomDrinkDisplay02');

function getApi() {
  // fetches data from the api, concatenates the user input for the ingredient called
  var requestUrl = 'https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      // two for loops in two different columns that displays drinks and details about them
      for(var i=0;i<data.drinks.length/2; i++){
        randomDrinkDisplay01El.innerHTML += (`<h5>${data.drinks[i].strDrink}</h5>
        <img alt="drink_image" height="200px" width="200px" src="${data.drinks[i].strDrinkThumb}"></img><br>
        Glass: ${data.drinks[i].strGlass} <br>
        Category: ${data.drinks[i].strCategory}<br>
        <p class="instructionParagraphs">${data.drinks[i].strInstructions}</p><br><br>`);
      


      // the api has the data as "strIngredient1" etc so
      // we make placeholder text here and add the number
      // of the current ingredient/measurement
      const ingredient_string = 'strIngredient';
      const measure_string = 'strMeasure'
      let drinkIngredients = [];
      let drinkMeasurements = [];

      // for loop that cycles through the data and returns
      // every ingredient/measurement
      for(var j=1; j<= 15; j++){
        var ingredientTemp = ingredient_string;
        var measurementTemp= measure_string;

        // makes the string "strIngredent" then whatever number you are on
        ingredientTemp+=j;
        measurementTemp+=j;

        // if there is no ingredient/measurement then dont read in the data
        if(data.drinks[0][ingredientTemp] !== null){
          drinkIngredients.push(data.drinks[0][ingredientTemp]);
        }
        if(data.drinks[0][measurementTemp] !== null){
          drinkMeasurements.push(data.drinks[0][measurementTemp]);
        }
      }

      // for loop to append ingredients and measurements
      for(var k=0; k < drinkIngredients.length; k++){

        randomDrinkDisplay01El.innerHTML += (`<p>${drinkMeasurements[k]} ${drinkIngredients[k]}</p>`)
      }
    }
      

      for(var i=data.drinks.length/2;i<data.drinks.length; i++){
        randomDrinkDisplay02El.innerHTML += (`<h5>${data.drinks[i].strDrink}</h5>
        <img alt="drink_image" height="200px" width="200px" src="${data.drinks[i].strDrinkThumb}"></img><br>
        Glass: ${data.drinks[i].strGlass} <br>
        Category: ${data.drinks[i].strCategory}<br>
        <p class="instructionParagraphs">${data.drinks[i].strInstructions}</p>`);
      }      
    })
  }


getApi();

