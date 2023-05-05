(function(){
    'use strict';

    var map = L.map('map').setView([37.338207, -121.886330], 11);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker1 = L.marker([37.322698, -121.778926]).addTo(map);
    marker1.bindPopup("<b>Evergreen Valley High School</b><br>My high school.");
    
    var marker2 = L.marker([37.311245, -122.023622]).addTo(map);
    marker2.bindPopup("<b>TP Tea</b><br>My favorite tea place in the Bay.");
    
    var circle = L.circle([37.321932, -121.824435], {
        color: 'purple',
        fillColor: '#db99db',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(map);
    circle.bindPopup("<b>Lion Plaza</b><br>Memories of grocery shopping with my mom.");
    
    // var popup = L.popup()
    //     .setLatLng([37.322698, -121.778926])
    //     .setContent("I am a standalone popup.")
    //     .openOn(map);

    var popup = L.popup();

    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);
    }

    map.on('click', onMapClick);

    
}());