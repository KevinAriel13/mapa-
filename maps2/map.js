
var map = L.map('map').setView([-0.316082, -78.534104], 12);

var latlngs = [
    [-0.316082, -78.534104],
    [-0.288797, -78.531919]
];
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-0.288797, -78.531919]).addTo(map)
    .bindPopup('Yavirac.')
    .openPopup();

    L.marker([-0.316082, -78.534104]).addTo(map)
     
    .bindPopup('Mi casa LK Kevin.')
    .openPopup();
    
L.circle([-0.288797, -78.531919], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
       
    }).addTo(map)
    
    L.circle([-0.316082, -78.534104], {
        color: 'blue',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
       
    }).addTo(map)
    var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);

   