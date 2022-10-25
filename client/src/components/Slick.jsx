import { Image } from '@chakra-ui/react';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import codeImage from '../components/images/code.png';
import designerImage from '../components/images/designer.png';
import developerIimage from '../components/images/developer.png';
import laptopImage from '../components/images/lap.png';

const Slick = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className="p-5">
      <Slider {...settings}>
        <div
          style={{
            height: '120px',
            background: 'red',
            padding: '10px',
          }}
        >
          <Image src={designerImage} />
        </div>
        <div
          style={{
            height: '120px',
            background: 'red',
            padding: '10px',
          }}
        >
          <Image src={developerIimage} />
        </div>
        <div
          style={{
            height: '120px',
            background: 'red',
            padding: '10px',
          }}
        >
          <Image src={laptopImage} />
        </div>
        <div
          style={{
            height: '120px',
            background: 'red',
            padding: '10px',
          }}
        >
          <Image src={codeImage} />
        </div>
      </Slider>
    </div>
  );
};

export default Slick;
