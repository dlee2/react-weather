const dayMap = {
	"0": "Sunday",
	"1": "Monday",
	"2": "Tuesday",
	"3": "Wednesday",
	"4": "Thursday",
	"5": "Friday",
	"6": "Saturday"
}

const monthMap = {
	"0": "January",
	"1": "February",
	"2": "March",
	"3": "April",
	"4": "May",
	"5": "June",
	"6": "July",
	"7": "August",
	"8": "September",
	"9": "October",
	"10": "November",
	"11": "December"
}


export function convertTemp (kelvin){
	return Math.round((kelvin - 273.15) * 1.8000 + 32.0)
}

export function getDate (unixTimestamp) {
	var date = new Date(unixTimestamp * 1000);
	var day = dayMap[date.getDay()];
	var month = monthMap[date.getMonth()] + ',' + date.getDate();
	return day + ',' + month
}

