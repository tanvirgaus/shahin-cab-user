//create map
function intializeMap(lat,long){
        var mapOptions = {
          center: new google.maps.LatLng(lat,long),
          zoom: 8,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
		
        var map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);
		//return map;
}
var onSuccess = function(position) {
	//alert(position.coords.latitude);
	var t = intializeMap(position.coords.latitude, position.coords.longitude);
	google.maps.event.addDomListener(window, 'load', t);
};

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}
navigator.geolocation.getCurrentPosition(onSuccess, onError);


