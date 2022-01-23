console.log("test");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);

// Add multiple markers by first creating an array (or getting data from a separate array)
let cityData = cities;


// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
    console.log(city)
   });

// Add array's coordinates to marker function
// cityData.forEach(function(city) {
//     L.marker(city.location)
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//     .addTo(map);
// });

// Using a circle to represent population size instead of markers
cityData.forEach(function(city) {
    L.circleMarker(city.location, {
        radius: city.population/200000,
        color: "orange",
        lineweight: 4
    })
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
    .addTo(map);
});

// We create the tile layer that will be the background of our map.
// different styles (id) are available, including mapbox/outdoors-v11, mapbox/light-v10,
// mapbox/dark-v10, mapbox/satellite-v9, mapbox/satellite-streets-v11
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);