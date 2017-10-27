import React, { Component } from 'react';
import {Carousel, CarouselItem, CarouselControl, CarouselIndicators,} from 'reactstrap';
import "./Carousel.css"

const items = [
  {
    src: 'https://static1.squarespace.com/static/51dc19e7e4b026638f408b89/t/53d94dbee4b04937231da1ef/1406750152474/',
    altText: 'Slide 1'
  },
  {
    src: 'https://static1.squarespace.com/static/51dc19e7e4b026638f408b89/t/53d94dbee4b04937231da1ef/1406750152474/?',
    altText: 'Slide 2'
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
          </CarouselItem>
      );
    });
    return (
      <div className="imageSize col-lg-12">
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
      </div>
    );
   }
  }

export default Example;
