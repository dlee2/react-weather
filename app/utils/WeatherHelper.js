import axios from 'axios'

const id = "3b1b7b6ffeca5865cd77642321883213";
const baseurl = "http://api.openweathermap.org/data/2.5/"

function prepRouteParams(queryStringData) {
	return Object.keys(queryStringData)
	.map(function(key) {
		return key + "=" + encodeURIComponent(queryStringData[key]);
	}).join("&");
}


function getQueryStringData (city){
	return {
		q: city,
		type: 'accurate',
		APPID: id,
		cnt:5
	}
}


function prepUrl(type, queryStringData) {
	return (baseurl + type +"?" + prepRouteParams(queryStringData))
}



export function getCurrentWeather(city) {
	var queryStringData = getQueryStringData(city);
	var url = prepUrl("weather",queryStringData);

	return axios.get(url)
		.then(function(forecastData) {
			return forecastData.data
		})
}


export function getForecast(city) {
	var queryStringData = getQueryStringData(city);
	var url = prepUrl("forecast/daily",queryStringData);

	return axios.get(url)
		.then(function(forecastData) {
			return forecastData.data
			console.log(forecastData.data)
		})
}


