// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.5, -122.5], 10);

// Add GeoJSON data.
// GeoJSON coordinates appear in reverse order, i.e. longitude, latitude
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport).addTo(map);

// Grabbing our GeoJSON data with pointToLayer function.
// L.geoJSON(sanFranAirport, {
//     // We turn each feature into a marker on the map.
//     pointToLayer: function(feature, latlng) {
//       console.log(feature);
//       console.log(latlng);
//       return L.marker(latlng)
//       .bindPopup("<h2>" + feature.properties.name + "</h2> <h3>" + feature.properties.city + ", " + feature.properties.country + "<h3>");
//     }
    
//   }).addTo(map);

// Grabbing GeoJSON data with the onEachFeature function
L.geoJSON(sanFranAirport, {
    onEachFeature: function(feature, layer) {
        console.log(layer);
        layer.bindPopup("<h3>" + "Airport code: " + feature.properties.faa + "</h3>" + "<h4> Airport name: " + feature.properties.name + "</h4>");
    }
}).addTo(map);

// We create the tile layer that will be the background of our map.
// different styles (id) are available, including mapbox/outdoors-v11, mapbox/light-v10,
// mapbox/dark-v10, mapbox/satellite-v9, mapbox/satellite-streets-v11,
// mapbox/navigation-night-v1, mapbox/navigation-day-v1
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/navigation-night-v1',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);