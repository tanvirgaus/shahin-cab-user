//create map
var map,
	currentPositionMarker,
	mapCenter = new google.maps.LatLng(40.700683, -73.925972),
	map;

function initializeMap()
{
	map = new google.maps.Map(document.getElementById('map-canvas'), {
	   zoom: 13,
	   center: mapCenter,
	   mapTypeId: google.maps.MapTypeId.ROADMAP
	 });
}

function locError(error) {
	// the current position could not be located
	alert("The current position could not be found!");
}

function setCurrentPosition(pos) {
	currentPositionMarker = new google.maps.Marker({
		map: map,
		position: new google.maps.LatLng(
			pos.coords.latitude,
			pos.coords.longitude
		),
		title: "Current Position"
	});
	map.panTo(new google.maps.LatLng(
			pos.coords.latitude,
			pos.coords.longitude
		));
}

function displayAndWatch(position) {
	// set current position
	setCurrentPosition(position);
	// watch position
	watchCurrentPosition();
}

function watchCurrentPosition() {
	var positionTimer = navigator.geolocation.watchPosition(
		function (position) {
			setMarkerPosition(
				currentPositionMarker,
				position
			);
		});
}

function setMarkerPosition(marker, position) {
	marker.setPosition(
		new google.maps.LatLng(
			position.coords.latitude,
			position.coords.longitude)
	);
}

function initLocationProcedure() {
	initializeMap();
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(displayAndWatch, locError);
	} else {
		alert("Your browser does not support the Geolocation API");
	}
}

$(document).ready(function() {
	initLocationProcedure();
});


/*
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

function myLocation(){
navigator.geolocation.getCurrentPosition(onSuccess, onError);
}
function loadMarker() {
var lat = parseFloat(document.getElementById('markerLat').value);
var lng = parseFloat(document.getElementById('markerLng').value);
var newLatLng = new google.maps.LatLng(lat, lng);
marker.setPosition(newLatLng);
}




myLocation();

setInterval(function() { loadMarker(); },5000);
*/
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