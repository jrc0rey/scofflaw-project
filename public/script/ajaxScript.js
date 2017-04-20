function PostTicket(data){

	$.ajax({
		url: '/scofflaw/nycmap',
		type: 'POST',
		data: data,
		success: function(data){
			console.log(data)
		},
		error: function(err){
			console.log(err)
		}
	})

}






var addresses = []


function Address(lat, lng, address, ticket_time){
	this.lat = lat;
	this.lng = lng;
	this.address = address;
	this.ticket_time = ticket_time
}


// Ajax call to New York open Data
$.ajax({
  url: 'https://data.cityofnewyork.us/resource/qpyv-8eyi.json',
  type: "GET",
  dataType: 'json',
  success: function(address) {
  	console.log(address)

  		for(var i = 901; i <= 1000; i++){

  			getAddresses(address[i])


		}
},
  error: function(err) {
  	console.log(err)
  }
});




function getAddresses(address, i){

	if(address.house_number != undefined){

		console.log(address)
		var address = address;
			

		function getAddress(){
			return address.violation_time
		}

				$.ajax({
			  		url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address.house_number + address.street_name + ',+New+York,+NY&key=AIzaSyCh3psezZRrUUocBJZeuSvL83nGvO2NibE',
			  		type: "GET",
			  		dataType: 'json',
			  		success: function(data) {
			  			console.log(data, ' this is data')
			  		
			  			if(data.results[0].geometry != undefined || data != undefined){
				  			var lat = data.results[0].geometry.location.lat;
				  			var lng = data.results[0].geometry.location.lng;
				  			var address = data.results[0].formatted_address;
				  			var ticket = getAddress()
				  			console.log(new Address(lat, lng, address, ticket), ' new object')
				  			addresses.push(new Address(lat, lng, address, ticket))
				  			PostTicket(new Address(lat, lng, address, ticket))

			  			}
			 

			  		},
			  		error: function(err) {
			  		console.log(err)
			  	}


			});

	}

}// end of function
