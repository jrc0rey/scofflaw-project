// https://data.cityofnewyork.us/resource/qpyv-8eyi.json

import mapboxgl from 'mapbox-gl';
var MapboxGeocoder = require('mapbox-gl-geocoder');

//Sign in & Register forms
$('.registerFont').css('cursor', 'pointer');
$('.signInFont').css('cursor', 'pointer');


$('.registerFont').click(function(){
	$('.registerFont').css('color', '#009DDC');
	$('.signInFont').css('color', 'black');
	$('.signInForm').css('display', 'none');
	$('.registerForm').css('display', 'flex');
	$('.regUser').val('');
	$('.regPass').val('');
	$('.error').css('display', 'none');
});

$('.signInFont').click(function(){
	$('.registerFont').css('color', 'black')
	$('.signInFont').css('color', '#009DDC')
	$('.signInForm').css('display', 'flex');
	$('.registerForm').css('display', 'none');
	$('.signUser').val('');
	$('.passUser').val('')
});

//Ajax call to New York open Data
if (document.location.pathname == "/scofflaw/nycmap") {
$.ajax({
  url: 'https://data.cityofnewyork.us/resource/qpyv-8eyi.json',
  type: "GET",
  dataType: 'json',
  success: function(data) {
    console.log(data[0].house_number + ' ' + data[0].street_name)
    console.log(data[0].violation_time)

  },
  error: function(err) {
  	console.log(err)
  }
});
}

//MapBox Code 
mapboxgl.accessToken = 'pk.eyJ1IjoianJjb3JleSIsImEiOiJjajFsaGxrOXowMDJxMzNsYnF6eDNjNnZiIn0.OsSjte46X_PSnJgkAP2Vfg';

const map = new mapboxgl.Map({
	accessToken: 'pk.eyJ1IjoianJjb3JleSIsImEiOiJjajFsaGxrOXowMDJxMzNsYnF6eDNjNnZiIn0.OsSjte46X_PSnJgkAP2Vfg',
	style: 'mapbox://styles/mapbox/light-v9',
    container: 'mapid',
    center: [ -73.980065, 40.742329],
  	zoom: 12,
});



// var map = new mapboxgl.Map({
// accessToken: 'pk.eyJ1IjoianJjb3JleSIsImEiOiJjajFsaGxrOXowMDJxMzNsYnF6eDNjNnZiIn0.OsSjte46X_PSnJgkAP2Vfg',
//   container: 'mapid',
//   center: [-122.420679, 37.772537],
//   zoom: 13,
//   style: 'mapbox://styles/mapbox/light-v9',
// });

// var marker = new mapboxgl.Marker()
//   .setLngLat([30.5, 50.5])
//   .addTo(map);



var geocoder = new MapboxGeocoder({
	accessToken: 'pk.eyJ1IjoianJjb3JleSIsImEiOiJjajFsaGxrOXowMDJxMzNsYnF6eDNjNnZiIn0.OsSjte46X_PSnJgkAP2Vfg',
});
map.addControl(geocoder);


