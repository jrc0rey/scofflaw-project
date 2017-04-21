// https://data.cityofnewyork.us/resource/qpyv-8eyi.json


//Buttons
$('.registerFont').css('cursor', 'pointer');
$('.signInFont').css('cursor', 'pointer');
$('.logout').css('cursor', 'pointer');
$('.logout').css('cursor', 'pointer');
$('.graph').css('cursor', 'pointer');
$('.about').css('cursor', 'pointer');



//Sign in & Register forms
$('.registerFont').click(function(){
	$('.registerFont').css('color', '#CF6766');
	$('.signInFont').css('color', '#1D2731');
	$('.signInForm').css('display', 'none');
	$('.registerForm').css('display', 'flex');
	$('.regUser').val('');
	$('.regPass').val('');
	$('.error').css('display', 'none');
});

$('.signInFont').click(function(){
	$('.registerFont').css('color', '#1D2731');
	$('.signInFont').css('color', '#CF6766');
	$('.signInForm').css('display', 'flex');
	$('.registerForm').css('display', 'none');
	$('.signUser').val('');
	$('.passUser').val('');
});




//Google Maps code
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.7228809, lng: -73.9619602},
          zoom: 10,
          minZoom: 10,
          // scrollwheel: false,
          disableDefaultUI: true,
          styles: 
          [
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#0060ff"
            },
            {
                "lightness": -100
            },
            {
                "visibility": "off"
            },
            {
                "saturation": "-77"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#848ea4"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#0060ff"
            },
            {
                "saturation": "-70"
            },
            {
                "lightness": "0"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "hue": "#0050ff"
            },
            {
                "saturation": "0"
            },
            {
                "lightness": "0"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "labels",
        "stylers": [
            {
                "hue": "#0060ff"
            },
            {
                "saturation": "-80"
            },
            {
                "lightness": "-90"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#0060ff"
            },
            {
                "saturation": "-80"
            },
            {
                "lightness": "-70"
            },
            {
                "visibility": "off"
            },
            {
                "gamma": "1"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#0060ff"
            },
            {
                "saturation": "-85"
            },
            {
                "lightness": "60"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "hue": "#0060ff"
            },
            {
                "saturation": "-70"
            },
            {
                "lightness": "50"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#0060ff"
            },
            {
                "saturation": "0"
            },
            {
                "lightness": "-11"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "hue": "#0060ff"
            },
            {
                "lightness": "0"
            },
            {
                "saturation": "0"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels",
        "stylers": [
            {
                "hue": "#0060ff"
            },
            {
                "lightness": -100
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#0066ff"
            },
            {
                "saturation": "0"
            },
            {
                "lightness": 100
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "hue": "#000000"
            },
            {
                "saturation": -100
            },
            {
                "lightness": -100
            },
            {
                "visibility": "off"
            }
        ]
    }
]
});

        

//Google Marker Code

$.ajax({
		url: '/scofflaw/nyc-map/tickets',
		type: 'GET',
		dataType: 'json',
		success: function(data){

			for(var i=0; i <= data.length; i++){
				if(data[i] != undefined){
					var infowindow = new google.maps.InfoWindow({
    				content: data[i].address + "<br/>" + "Time issued:" + " " + data[i].ticket_time

  					});
					var obj = {lat: parseFloat(data[i].lat), lng: parseFloat(data[i].lng)};
					var marker = new google.maps.Marker({
						position: {lat: obj.lat, lng: obj.lng},
						map: map,
					})

					// console.log(infowindow, ' infowindow')
					addListenerToMarker(marker, infowindow)
			
				}
			}
		



		},
		error: function(err){
			console.log(err)
		}
});


function addListenerToMarker(marker, infowindow){
	marker.addListener('click', function() {
				// console.log(this.marker, ' this is this.marker')
			 infowindow.open(map, marker);
		});

};






var searchBox = new google.maps.places.SearchBox(document.getElementById('searchInput'));
	
	google.maps.event.addListener(searchBox, 'places_changed', function(){
		var places = searchBox.getPlaces();
		var bounds = new google.maps.LatLngBounds();
		var i, place;

		for(var i=0; place=places[i]; i++){
			bounds.extend(place.geometry.location)
		}

		map.fitBounds(bounds);
		map.setZoom(15);

	})
// 	

var input = document.getElementById('searchInput')

$(".searchBtn").bind('click', function() {
    google.maps.event.trigger(input, 'focus')
    google.maps.event.trigger(input, 'keydown', {
        keyCode: 13
    });
    $(input).value('')
  });




















