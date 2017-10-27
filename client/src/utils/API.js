import axios from "axios";

export default {
 getPlace(){
    const location =  "9938 mallard";
    axios.get("https://maps.googleapis.com/maps/api/geocode/json", {
      params: {
        address:location,
        key: "AIzaSyBcY8rW5GYteecxhkW1PNAwswuKFbPuWrE",
      }
    })
    .then(function(response){
      console.log(response)
      var formattedAddress  = response.data.results[0].formatted_address;
      var formattedAddressOutput =  `
       <ul class="list-group">
        <li class="list-group-item">${formattedAddress}</li>
       </ul>
      `;

      var addressComponent = response.data.results[0].addressComponent;
      var addressComponentOutput = '<ul class="list-group">';
      for (var i =0; i < addressComponent.length; i++){
        addressComponentOutput += `
        <li
          class="list-group-item">${addressComponent[i].types[0]}:${addressComponent[i].long_name}</li>
        `
      }
      addressComponentOutput += '</ul>'

     document.getElementById("formatted_address").innerHTML = formattedAddressOutput;
     document.getElementById("address-component").innerHTML = addressComponentOutput;
     })

    .catch(function(error){
      console.log(error)
    })
  }
}
