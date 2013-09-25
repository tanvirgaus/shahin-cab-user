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