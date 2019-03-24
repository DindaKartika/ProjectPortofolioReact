import React, { Component } from 'react';
import {Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption} from 'reactstrap';

// import Resign from 'https://scoopadm.apps-foundry.com/ebook-covers/41482/image_highres/ID_GPU2018MTH02MRES.jpg'
// import AddieMs from './../image/Book/biografi/addie-ms.jpg'
// import TemanChatting from 'https://s2.bukalapak.com/img/2665782532/w-1000/Buku_cerita_Anak_KKPK_Gold_Edition___Teman_Chatting_Misteriu.jpg'

const items = [
  {
    src: 'https://scoopadm.apps-foundry.com/ebook-covers/41482/image_highres/ID_GPU2018MTH02MRES.jpg',
    altText: 'Resign!'
  },
  {
    src: 'data:image/jpeg;base64,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',
    altText: 'Addie Ms'
  },
  {
    src: 'https://s2.bukalapak.com/img/2665782532/w-1000/Buku_cerita_Anak_KKPK_Gold_Edition___Teman_Chatting_Misteriu.jpg',
    altText: 'Teman Chatting'
  }
];

class CarouselHome extends Component {
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
        >
          <img src={item.src} alt={item.altText} />
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


export default CarouselHome;
