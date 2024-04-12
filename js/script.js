const APIkey = "29c468e06abba699f80dc5382f6c0c90"

$("form").on("submit",function(event){
    event.preventDefault();
    const cityArr = JSON.parse(localStorage.getItem('cityname')) || []


    console.log('hi eric')

    
    let city = event.target[0].value;
    cityArr.push(city)
    const queryURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`;

    fetch(queryURL)
    .then(response => {
    return response.json()
    })
    .then(data => generateForecast(data))
    // .catch(error => console.log('ERROR'))
    localStorage.setItem('cityname', JSON.stringify(cityArr))

    this.reset();


})

function generateForecast(forecast){
    console.log(forecast)

    const card = $('<div>').addClass('card')

    const cardBody = $('<div>').addClass('card-body')
    
   const forecastName = $('<h2>').text(forecast.name)
   const forecastDesc = $('<h3>').text(forecast.weather[0].description)
   const forecastTemp = $('<p>').text(forecast.main.temp)
    
    forecastName.addClass('card-title')
    forecastDesc.addClass('card-title')
    forecastTemp.addClass('card-text')

    $(cardBody).append(forecastName)
    $(cardBody).append(forecastDesc)
    $(cardBody).append(forecastTemp)

    $(card).append(cardBody)
    
    $('#currentForecast').append(card)
    
    
    console.log(card)


}

    //$(#5dayForecast).each(generateForecast()){


    
        //create an element
        //change the text to property value in object
        // append text to the card
        //append card to the dom
        
    
    //create a for loop through 5 day forecast
    //
    

// access properties on objects
// create a card
// tie property values to the card