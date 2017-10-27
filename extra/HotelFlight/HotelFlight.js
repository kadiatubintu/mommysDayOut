import React from 'react';
import {Component, google, callback, createMarker, request} from "react";
import GooglePlaces from 'react-google-places-component';
// import styled from "styled-components";
// import {PropTypes} from "react"
// import
//
// this.scriptCache = cache({
//   google: 'https://api.google.com/some/script.js'
// });
//
// // <script src="https://maps.googleapis.com/maps/api/js?key=XXXXXXXXXX&libraries=places"></script>
//
// GoogleApi({
//   apiKey: AIzaSyA5GekxogJ3aq2n0PjGF0WG9f9y3Txyyws,
//   libraries: ['places']
// });
//
// const Container = React.createClass({
//   render: function() {
//     return <div>Google</div>;
//   }
// })
// export default GoogleApiComponent({
//   apiKey: AIzaSyA5GekxogJ3aq2n0PjGF0WG9f9y3Txyyws,

const Checkbox = require("../component/Checkbox");

const ac = new google.maps.places.Autocomplete(document.getElementById("autocomplete"))
google.maps.event.addListener(ac, "place_changed", function(){
const place = ac.getPlace();
  console.log(place.formatted_name);
  console.log(place.formatted_place);
  console.log(place.formatted_number);
});
////////////////////////////////////////
const ac = new google.maps.places.Autocomplete(document.getElementById("autocomplete"))
google.maps.event.addListener(ac, "place_changed", function(){
  const place = ac.getPlace();
  console.log(place.formatted_name);
  console.log(place.formatted_place);
  console.log(place.formatted_number);
///////////////////////////////////////////////////////////
// })(Container)
var map;
var infoWindow;
var service;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -33.867, lng: 151.206},
    zoom: 15,
    styles: [{
      stylers: [{ visibility: 'simplified' }]
    }, {
      elementType: 'labels',
      stylers: [{ visibility: 'off' }]
    }]
  });

  infoWindow = new google.maps.InfoWindow();
  service = new google.maps.places.PlacesService(map);

  // The idle event is a debounced event, so we can query & listen without
  // throwing too many requests at the server.
  map.addListener('idle', performSearch);
}

function performSearch() {
  var request = {
    bounds: map.getBounds(),
    keyword: 'best view'
  };
  service.radarSearch(request, callback);
}

function callback(results, status) {
  if (status !== google.maps.places.PlacesServiceStatus.OK) {
    console.error(status);
    return;
  }
  for (var i = 0, result; result = results[i]; i++) {
    addMarker(result);
  }
}

function addMarker(place) {
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location,
    icon: {
      url: 'https://developers.google.com/maps/documentation/javascript/images/circle.png',
      anchor: new google.maps.Point(10, 10),
      scaledSize: new google.maps.Size(10, 17)
    }
  });

  google.maps.event.addListener(marker, 'click', function() {
    service.getDetails(place, function(result, status) {
      if (status !== google.maps.places.PlacesServiceStatus.OK) {
        console.error(status);
        return;
      }
      infoWindow.setContent(result.name);
      infoWindow.open(map, marker);
    });
  });
}
export default Example;
