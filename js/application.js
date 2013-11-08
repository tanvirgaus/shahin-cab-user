(function($) {
var map;
var marker;
var newLatlng;
var i = 0;

//here i create a map centered on 0,0
function initialize() {
	directionsDisplay = new google.maps.DirectionsRenderer();
	var chicago = new google.maps.LatLng(0, 0);
	var mapOptions = {
		zoom : 14,
		mapTypeId : google.maps.MapTypeId.ROADMAP,
		center : chicago
	}
	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	directionsDisplay.setMap(map);

	updatePos();

}

//here I set my marker (if i==0 -> first run)
function updatePos() {

	var options = {
		timeout : 3000,
		enableHighAccuracy : true,
		maximumAge : 0
	};
	var myUpdatedPos = navigator.geolocation.watchPosition(onSuccess, onError, options);

	function onSuccess(position) {

		if (i == 0) {
			marker = new google.maps.Marker({
				position : new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
				map : map,
				animation : google.maps.Animation.DROP
			});
		}
		i++;

		//here I update the position
		newLatlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
		marker.setPosition(newLatlng);
	}

	// onError Callback receives a PositionError object
	//
	function onError(error) {
		alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
	}

}

initialize();
})(jQuery);