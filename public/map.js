
 const mapbox_access_token = 'pk.eyJ1IjoiY2hyaXM0MCIsImEiOiJja3Mzbm9yOXUwb3RyMm5waW5mMDN3eTg4In0.GhpkpkM2hBLFyW6vs6FdVQ';
 var tiles = L.tileLayer(`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=${mapbox_access_token}`, {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  tileSize: 512,
  zoomOffset: -1,
  });

var map = L.map('mapid')
.addLayer(tiles)
.setView([42.3610, -71.0587], 15);
