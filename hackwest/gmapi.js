 var map;
         function initMap() {
             
             
             
             
             
             
        var directionsService = new google.maps.DirectionsService;
        var directionsRenderer = new google.maps.DirectionsRenderer;
          map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: {lat: 33.584538,
                lng: -101.874720},
          mapTypeId: 'terrain'
        });
        directionsRenderer.setMap(map);
 calculateAndDisplayRoute(directionsService, directionsRenderer);
       /* document.getElementById('submit').addEventListener('click', function() {
          calculateAndDisplayRoute(directionsService, directionsRenderer);
        });*/
             
              var loc= getLocation(map);
             
             
             
             
             
             var stops =[{lat:33.594137,lng:-101.875016} ,
{lat:33.585432,lng:-101.873055},
{lat:33.588910,lng:-101.880105},
{lat:33.588056,lng:-101.887245},
{lat:33.595924,lng:-101.887193},
{lat:33.595942,lng:-101.885575} ]






 for (var stop in stops) {
          // Add the circle for this city to the map.
    
          var cCircle = new google.maps.Circle({
            strokeColor: '#8B008B',
            strokeOpacity: 0.6,
            strokeWeight: 2,
            fillColor: '#000099',
            fillOpacity: 0.50,
            map: map,
            center: stops[stop],
            radius: 20
          });
        }
               var loc = {lat:33.594151,lng:-101.874000} ;
             
             
      
        
             
             
             
              var geoLoc = navigator.geolocation;
           
               var watchID = geoLoc.watchPosition(showLocation(stops,loc), errorHandler, options);
    
 
         }
         
         
         
         
          function showLocation( stops, loc){
             for (var stop in stops) {
                 var ky = 40000 / 360;
  var kx = Math.cos(Math.PI * stops[stop].lat / 180.0) * ky;
  var dx = Math.abs(stops[stop].lng - loc.lng) * kx;
  var dy = Math.abs(stops[stop].lat - loc.lat) * ky;
 var d =  Math.sqrt(dx * dx + dy * dy);
                 if(d<=0.04){
                     //remove person from bus
                     
                   //  console.log("Inside"+d)
                 }
                 else{
                    // console.log("Not inside geofence"+d)
                 }
             }
        }
        
           
      function calculateAndDisplayRoute(directionsService, directionsRenderer) {
        var route477 = [];
     var start =new google.maps.LatLng(33.594137,-101.875016) ;

          var end= new google.maps.LatLng(33.594129,-101.870566);
          
          

          
          var route47 = [
  
   { lat: 33.594129, lng: -101.870566 }, 
   { lat: 33.584546, lng: -101.870719 }, 
   { lat: 33.584654, lng: -101.873184 }, 
   { lat: 33.585432, lng: -101.873055 }, 
   { lat: 33.588158, lng: -101.872347 }, 
   { lat: 33.590142, lng: -101.874385 }, 
   
   { lat: 33.588910, lng: -101.880105 }, 
   { lat: 33.587745, lng: -101.882370 }, 
   { lat: 33.587673, lng: -101.887230 }, 
   { lat: 33.588056, lng: -101.887245 }, 

    
   { lat: 33.592205, lng: -101.887771 }, 
   { lat: 33.595922, lng: -101.887857 }, 
   { lat: 33.595924, lng: -101.887193 }, 
   { lat: 33.595942, lng: -101.885575 }, 
   { lat: 33.595940, lng: -101.879125 }, 
   { lat: 33.594164, lng: -101.879070 }, 
   ];

          
route47.forEach(element => route477.push({
    location: new google.maps.LatLng(element.lat, element.lng),
    stopover: false
}) );
          
          
          
          
          
        directionsService.route({
          origin: start,
          destination: end,
          waypoints: route477,
          optimizeWaypoints: true,
          travelMode: 'DRIVING'
        }, function(response, status) {
          if (status === 'OK') {
            directionsRenderer.setDirections(response);
            var route = response.routes[0];
          /*  var summaryPanel = document.getElementById('directions-panel');
            summaryPanel.innerHTML = '';
            // For each route, display summary information.
            for (var i = 0; i < route.legs.length; i++) {
              var routeSegment = i + 1;
              summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment +
                  '</b><br>';
              summaryPanel.innerHTML += route.legs[i].start_address + ' to ';
              summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
              summaryPanel.innerHTML += route.legs[i].distance.text + '<br><br>';
            }*/
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
        

      }