export default function locationFinder(newCity) {
    var geolocateApi = "https://api.openweathermap.org/geo/1.0/direct?q=" + newCity + "&limit=1&appid=d06d736f70b1c7547ee6d36a7c3c8929";
    fetch(geolocateApi)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        return data;
    });
}