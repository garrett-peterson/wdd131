document.getElementById("temp").innerHTML = '47°F';
document.getElementById("cond").innerHTML = 'Partly Sunny';
document.getElementById("wind").innerHTML = '4 mph';

let temperature = 47;
let windSpeed = 4;

let windChill  = function (temp, wind) {
    
    let chill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(wind, 0.16)) + (0.4275 * temp * Math.pow(wind, 0.16));
    let formattedChill = chill.toFixed(2);

    return `${formattedChill}°F`;
}

if (temperature <=50 && windSpeed > 3) {
    document.getElementById("chill").innerHTML = windChill(temperature, windSpeed);
}
