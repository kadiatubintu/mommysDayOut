import React, { Component } from 'react';
import FlightBadge from "../component/Header/FlightBadge";
import HotelBadge from "../component/Header/HotelBadge";
import Location from "../component/Location";
import Ratings from "../component/Dropdowns/Ratings";
import SaveBtn from "../component/Buttons/SaveBtn";
import Checkbox from "../component/Checkbox";


class App extends Component {
 render() {
   return (
     <div>
      <FlightBadge />
      <Location />
      <Checkbox />
      <HotelBadge />
      <Location />
      <SaveBtn />
     </div>
    );
   };
  }


export default App;

// Create the XHR object.
function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;
}

// Helper method to parse the title tag from the response.
function getTitle(text) {
  return text.match('<title>(.*)?</title>')[1];
}

// Make the actual CORS request.
function makeCorsRequest() {
  // This is a sample server that supports CORS.
  var url = 'http://html5rocks-cors.s3-website-us-east-1.amazonaws.com/index.html';

  var xhr = createCORSRequest('GET', url);
  if (!xhr) {
    alert('CORS not supported');
    return;
  }

  // Response handlers.
  xhr.onload = function() {
    var text = xhr.responseText;
    var title = getTitle(text);
    alert('Response from CORS request to ' + url + ': ' + title);
  };

  xhr.onerror = function() {
    alert('Woops, there was an error making the request.');
  };

  xhr.send();
}
