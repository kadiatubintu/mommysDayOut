import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import {Tooltip} from "reactstrap";
import Jumbotron from "./component/Jumbotron";
import CardLists from "./component/CardLists";
import Alert from  "./component/AlertsPrompts";
import Buttons from "./component/RadioBtns";
import Modals from "./component/Modals";
import RegisteredUser from "./component/InputForms/RegisteredUser";
import Checkbox from "./component/Checkbox";
import ChoiceBtns from "./component/ChoiceBtns";
import Pagination from "./component/Pagination";
import NewUser from "./component/InputForms//NewUser";
import Location from "./component/Location";
import Price from "./component/Dropdowns/Price";
import './App.css';


<div class="col">
  <input type="text" class="form-control" placeholder="Last name" />
</div>
<div class="form-row">
  <div class="form-group col-md-6">
    <label for="inputEmail4" class="col-form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
  </div>
  <div class="form-group col-md-6">
    <label for="inputPassword4" class="col-form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4" placeholder="Password" />
  </div>
</div>
<div class="form-row">
  <div class="form-group col-md-6">
    <label for="inputCity" class="col-form-label">City</label>
    <input type="text" class="form-control" id="inputCity" />
  </div>
  <div class="form-group col-md-4">
    <label for="inputState" class="col-form-label">State</label>
    <select id="inputState" class="form-control">Choose</select>
  </div>
  <div class="form-group col-md-2">
    <label for="inputZip" class="col-form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip" />
  </div>
</div>


<Col sm="3">
  <FormGroup>
    <label className="control-label">Username </label>
    <input type="text" class="form-control" id="exampleText" name="username" />
  </FormGroup>
  {' '}
  </Col>


 class App extends Component {
  render() {
    return (
      <div>
        <Jumbotron />
        <Price />
        <CardLists />
        <Buttons />
        <RegisteredUser />
        <NewUser />
        <Checkbox />
        <ChoiceBtns />
        <Pagination />
        <Location />
      </div>
     );
    };
   }


export default App;

import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Jumbotron fluid >
        <Container  fluid class="Jumbotron bg-primary">
          <h1 className="display-3">Mommy's Day Out</h1>
          <p className="lead">A place for Moms to have fun </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Example;


import React from 'react';
import { UncontrolledCarousel, propTypes, PropTypes, isRequired } from 'reactstrap';

const items = [
  {
    src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

const Example = () => <UncontrolledCarousel items={items} />;

UncontrolledCarousel.propTypes = {
  items: PropTypes.array,isRequired,
  indicators: PropTypes.bool, // default: true
  controls: PropTypes.bool, // default: true
  autoPlay: PropTypes.bool, // default: true
};


export default Example;


// export default class Location extends React.Component {
//   render() {
//     return (
//     <form>
//       <label for="inputCity" class="col-form-label">City</label>
//       <input type="text" class="form-control" id="inputCity" />
//       <label for="inputState" class="col-form-label">State</label>
//       <select id="inputState" class="form-control">Choose</select>
//       <Button>GO!</Button>
//     </form>
     );


     const Checkbox = require("../component/Checkbox");



     // <Route path='/users' component={Users}/>

     const Div = styled.div`
     height: 80px;
     padding: 30px;
     background-color: white;
     border-radius:5px;
     margin: 50px;
     &:hover {
        background-color: blue;
      }
     `;

     const Button = styled.button`
     background-color: white;
     color: blue;
     border-radius: 5px;
     font-size: 2em;
     font-family: "Abril Fatface";
     margin-left: 50px;
     width: 150px;

     &:hover {
        background-color: blue;
        color: white;
      }
     `;


     export default class Example extends React.Component {
       constructor(props){
         super(props);
         this.handleSightseeingpage = this.handleSightseeingpage.bind(this);
       }

       handleSightseeingpage(e) {
         e.preventDefault()
         window.location = "./Sightseeing"
         }
       componentWillMount(){

       }
       render() {
         return (
           <Div>
           <Button onClick={(e) =>this.handleSightseeingpage(e)}>Sight Seeing</Button>
           </Div>
          );
        }
      }

      function SelectSpadayActivity(props) {

        const activities = ["All", "Massage ", "Hair Salon", "Nail Salon", "Shopping"]

        return (
          <ul className="activities">
             {activities.map(function(act){
               return (
                 <li
                   style = {act === props.SelectSpadayActivity ? { color: "#d8821b"} : null}
                   onClick = {props.onSelect.bind(null, act)}
                   key={act}>
                 </li>
               )
             })}
           </ul>
        )
      }

     SelectSpadayActivity.propTypes = {
       SelectSpadayActivity:PropTypes.string.isRequired,

       const PropTypes = require("prop-types");
       const Activities = ["All" , "Massage"]

       export default class Example extends React.Component {
         constructor(props){
           super(props);

           this.SelectSpadayActivity = this.SelectSpadayActivity.bind(this);
         }

         SelectSpadayActivity(e){
           e.preventDefault()
           onSelect()
         }
        handleClick(e){
          e.preventDefault()
          console.log("hi")
        }
         render(){
           const displayActs = this.props.activities.map(function(key, val){
             return <displayAct key ={val} value={val}>{key}</displayAct>

           });

           return(
             <ul className="Activities">
                 <li
                   onClick = {this.handleClick}
                   >
                 </li>
               </ul>
             )
           }
         }


         const activities = ["All", "Massage", "Hair Salon", "Nail Salon", "Shopping"];

         class Example extends Component {
           function SelectActivity (props) {
             return (
               <ul className="activities">
                {activities.map(function(act){
                  return(
                    <li
                      style={act === props.selectedActivity ? {color: "#d8821b"} :null}
                      onClick={props.onSelect.bind(null, act)}
                      key={act}>
                       {act}
                         >
                      </li>
                    )
                  })}
                </ul>
               )
              }
            }

           SelectActivity.propTypes = {
             selectedActivity: PropTypes.string.isRequired,
             onSelect: PropTypes.func.isRequired,
           }
           class Example extends Component {



           let sectionStyle = {
             width: "100%",
             height: "400px",
             backgroundImage: `url(${Background})`
           };

           class Example extends Component {
             render() {
               return (
                 <section style={ sectionStyle }>
                 </section>
               );
             }
           }

           export default Example;

           // export default (props) => {
           //     const {source, ...otherProps} = props;
           //     const localImage = '../images/background_image1.jpg';
           //
           //     return(
           //       <BackgroundImage src={source} placeholder={localImage} {...otherProps}>
           //         <div className="something-else">
           //           Some more markup
           //         </div>
           //       </BackgroundImage>
           //     );
           //   }


           const Div = styled.div`
             background-image: url(${myImage});
           `;

           export default class Example extends React.Component {
            render() {
              return (
                <Div>
                 <text>hi</text>
                </Div>
              )
            }

           }


           import {Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption} from 'reactstrap';

           const items = [
             {
               src: 'http://leahcsphotography.com/wp-content/uploads/2017/04/Broolyn-March-2017-11-copy-1.jpg',
               altText: 'Slide 1',
               caption: 'Slide 1'
             },
             {
               src: 'http://www.hannahreneeblog.com/wp-content/uploads/2015/04/IMG_1785.jpg',
               altText: 'Slide 2',
               caption: 'Slide 2'
             },
             {
               src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
               altText: 'Slide 3',
               caption: 'Slide 3'
             }
           ];

           class Example extends Component {
             constructor(props) {
               super(props);
               this.state = { activeIndex: 0 };
               this.next = this.next.bind(this);
               this.previous = this.previous.bind(this);
               this.goToIndex = this.goToIndex.bind(this);
               this.onExiting = this.onExiting.bind(this);
               this.onExited = this.onExited.bind(this);
             }

             onExiting() {
               this.animating = true;
             }

             onExited() {
               this.animating = false;
             }

             next() {
               if (this.animating) return;
               const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
               this.setState({ activeIndex: nextIndex });
             }

             previous() {
               if (this.animating) return;
               const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
               this.setState({ activeIndex: nextIndex });
             }

             goToIndex(newIndex) {
               if (this.animating) return;
               this.setState({ activeIndex: newIndex });
             }

             render() {
               const { activeIndex } = this.state;

               const slides = items.map((item) => {
                 return (
                   <CarouselItem
                     onExiting={this.onExiting}
                     onExited={this.onExited}
                     key={item.src}
                     src={item.src}
                     altText={item.altText}
                   >
                     <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
                   </CarouselItem>
                 );
               });

               return (
                 <Carousel
                   activeIndex={activeIndex}
                   next={this.next}
                   previous={this.previous}
                 >
                   <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                   {slides}
                   <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                   <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                 </Carousel>
               );
             }
           }

           export default Example;

           const items = [
             {
               src: 'https://prettygirlssweat.com/sites/default/files/field/image/PGS_Vacation1.jpg',
               altText: 'Slide 1',
               caption: 'Slide 1'
             },
             {
               src: 'http://leahcsphotography.com/wp-content/uploads/2017/04/Broolyn-March-2017-11-copy-1.jpg',
               altText: 'Slide 2',
               caption: 'Slide 2'
             },
             {
               src: 'https://i0.wp.com/baucemag.com/wp-content/uploads/blackgirlstraveltoo-e1492615680222.png?resize=731%2C466',
               altText: 'Slide 3',
               caption: 'Slide 3'
             }
           ];



           var map;
           var infowindow;

           class Example extends Component {
               initMap() {
                 var pyrmont = {lat: -33.867, lng: 151.195};

               map = new google.maps.Map(document.getElementById('map'), {
                 center: pyrmont,
                 zoom: 15
                 });

                 infowindow = new google.maps.InfoWindow();
                 var service = new google.maps.places.PlacesService(map);
                 service.nearbySearch({
                   location: pyrmont,
                   radius: 500,
                   type: ['spa']
                 }, callback);
               }

               callback (results, status) {
                 if (status === google.maps.places.PlacesServiceStatus.OK) {
                   for (var i = 0; i < results.length; i++) {
                     createMarker(results[i]);
                   }
                 }
               }

                createMarker (place) {
                 var placeLoc = place.geometry.location;
                 var marker = new google.maps.Marker({
                   map: map,
                   position: place.geometry.location
                 });

                 google.maps.event.addListener(marker, 'click', function() {
                   infowindow.setContent(place.name);
                   infowindow.open(map, this);
                 });
               }
               render() {
                 return (
                   <div id="map">
                     <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places&callback=initMap" async defer></script>
                   </div>
                 );
               }
             }
             var map;
             var infowindow;

             class Example extends Component {
                 initMap() {
                   var pyrmont = {lat: -33.867, lng: 151.195};

                 map = new google.maps.Map(document.getElementById('map'), {
                   center: pyrmont,
                   zoom: 15
                   });

                   infowindow = new google.maps.InfoWindow();
                   var service = new google.maps.places.PlacesService(map);
                   service.nearbySearch({
                     location: pyrmont,
                     radius: 500,
                     type: ['spa']
                   }, callback);
                 }

                 callback (results, status) {
                   if (status === google.maps.places.PlacesServiceStatus.OK) {
                     for (var i = 0; i < results.length; i++) {
                       createMarker(results[i]);
                     }
                   }
                 }

                  createMarker (place) {
                   var placeLoc = place.geometry.location;
                   var marker = new google.maps.Marker({
                     map: map,
                     position: place.geometry.location
                   });

                   google.maps.event.addListener(marker, 'click', function() {
                     infowindow.setContent(place.name);
                     infowindow.open(map, this);
                   });
                 }
                 render() {
                   return (
                     <div id="map">
                       <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places&callback=initMap" async defer></script>
                     </div>
                   );
                 }
               }
