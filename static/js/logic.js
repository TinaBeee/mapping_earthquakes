// Add console.log to check to see if our code is working.
console.log("test");

// Create the map object with a center and zoom level.
// first coordinate corresponds to latitude, second to longitude
// zoom level is on a scale from 0-18
let map = L.map('mapid').setView([40.7, -94.5], 4);

//Alternatively, you can map like so:
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });

// Create a tile layer that will create the map's background
// different styles (id) are available, including mapbox/outdoors-v11, mapbox/light-v10,
// mapbox/dark-v10, mapbox/satellite-v9, mapbox/satellite-streets-v11
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: API_KEY
// });
// // Add tile layer to the map
// streets.addTo(map);


// Using the Mapbox Static Tiles API 
// Mapbox style link: https://docs.mapbox.com/api/maps/styles/
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Add tile layer to the map
streets.addTo(map);