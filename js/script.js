const APIkey = "29c468e06abba699f80dc5382f6c0c90"
const queryURL = 'http://api.openweathermap.org/data/2.5/weather?q={city}&appid={APIkey}';

let city = document.getElementById('cityname').value;

const cityName = JSON.stringify(city);

localStorage.setItem('cityname', cityName)

fetch(queryURL)
.then(response => {
   return response.json()
   })
.then(data => console.log(data))
.catch(error => console.log('ERROR'))