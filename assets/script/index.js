'use strict';

mapboxgl.accessToken = 'pk.eyJ1IjoiYnJpY2s5NzMiLCJhIjoiY2xiZ3J1czJ1MGVlMjNubzN3M2cxeDB0byJ9.Wk6nus9qpX7R3l9G8TXcnQ';
const map = new mapboxgl.Map({
     container: 'map', // container ID
     // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
     style: 'mapbox://styles/mapbox/streets-v12', // style URL
     center: [-74.5, 40], // starting position [lng, lat]
     zoom: 9 // starting zoom
});

const geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
    enableHighAccuracy: true
    },
    trackUserLocation: true
    });
    // Add the control to the map.
    map.addControl(geolocate);
    // Set an event listener that fires
    // when a geolocate event occurs.
    geolocate.on('geolocate', () => {
    console.log('A geolocate event has occurred.');
    });

    function getLocation(position) {
        const options = {
            enableHighAccuracy: true
        };
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(onSuccess, errorHandler, options);
        } else {
            console.log('geolocation is not support by your browser');
        }
    };
    function onSuccess(position) {
        let longitude = position.coords.longitude;
        let latitude = position.coords.latitude;
        map.setCenter([longitude, latitude]);
        const marker1 = new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(map);
        map.setZoom(15);
    }
    function errorHandler(error) {
        console.log(error.message);
    }
    window.onload = function () {
        getLocation();
    }

    // Create a default Marker and add it to the map.
const marker1 = new mapboxgl.Marker()
.setLngLat([12.554729, 55.70651])
.addTo(map);
 
// Create a default Marker, colored black, rotated 45 degrees.
const marker2 = new mapboxgl.Marker({ color: 'black', rotation: 45 })
.setLngLat([12.65147, 55.608166])
.addTo(map);

const marker3 = new mapboxgl.Marker()
.setLngLat([-97.554729, 49.70651])
.addTo(map);

const marker4 = new mapboxgl.Marker()
.setLngLat([-97.113629, 49.70651])
.addTo(map);

const marker5 = new mapboxgl.Marker()
.setLngLat([-97.013629, 49.81651])
.addTo(map);

const marker6 = new mapboxgl.Marker({ color: 'black', rotation: 45 })
.setLngLat([-97.123629, 49.91651])
.addTo(map);