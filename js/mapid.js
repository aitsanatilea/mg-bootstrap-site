"use strict";

var mymap = L.map('mapid').setView([50.07112,14.40395],16);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 20,
  id: 'mapbox.streets',
  accessToken: 'pk.eyJ1IjoiYXJ0YW5hIiwiYSI6ImNqajVtdnZ1bzF2OGMzcW4zNmhiNHIzaWQifQ.1zjFhAGJC59X_LVyewyk_A'
}).addTo(mymap);

L.marker([50.07112,14.40395]).addTo(mymap)
  .bindPopup('Massive Gravity s.r.o.')
  .openPopup();
