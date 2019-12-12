import React, { Component } from 'react';
import Slider from "react-slick";
import Fade from 'react-reveal/Fade';
import styles from './Carousel.module.scss';
class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
     reveals: [true,false,false,false]
    }
  }

  render() {
   let settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: true,
      autoplaySpeed: 5000,
      className: 'slides',
      afterChange: async (i) => {
        let reveals = [...this.state.reveals];
        reveals[i] = true;
        if (i === 0) {
          reveals[reveals.length-1] = false;
        } else {
          reveals[i-1] = false;
        }
        await this.setState({reveals});
        await console.log('reeals', this.state.reveals);
      }
    }
    return (
      <div>
        <Slider {...settings}>
          {this.state.reveals.map( (item, i) => {
            return (
              <Fade top when={item} appear={item} key={i}>
                <div className={styles.carouselItem}>
                  <h3>{i}</h3>
                </div>
              </Fade>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default Carousel;