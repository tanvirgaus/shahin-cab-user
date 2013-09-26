//create map
function intializeMap(lat,long){
	
        var mapOptions = {
          center: new google.maps.LatLng(lat,long),
          zoom: 14,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
		
        var map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);
		var marker = new google.maps.Marker({
		  position: new google.maps.LatLng(lat,long),
		  map: map,
		  title: 'My Location'
  });
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


/*
function deviceready() {
            console.log("Device ready");
            navigator.compass.watchHeading(function(heading){
                document.getElementById("heading").innerHTML = heading.trueHeading;
            },function(error){
                var errorType;
                switch(error.code){
                    case CompassError.COMPASS_NOT_SUPPORTED:
                        errorType = "Compass not supported";
                        break;
                    case CompassError.COMPASS_INTERNAL_ERR:
                        errorType = "Compass internal error";
                        break;
                    default:
                        errorType = "Unknown compass error";
                }
                document.getElementById("heading").innerHTML = errorType;
            });
        }
        document.addEventListener("deviceready", deviceready, true);
*/