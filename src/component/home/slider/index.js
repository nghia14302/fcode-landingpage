import React from 'react';

import Carousel from 'react-multi-carousel';

import { clubActiveImgs } from './../../../assets/photos/index';
import { Item, LeftArrow, RightArrow } from './style';

import 'react-multi-carousel/lib/styles.css';

const responsive = {
    desktop: {
        breakpoint: {
            max: 3000,
            min: 1400,
        },
        items: 3,
        partialVisibilityGutter: 40,
    },
    mobile: {
        breakpoint: {
            max: 900,
            min: 0,
        },
        items: 1,
        partialVisibilityGutter: 30,
    },
    tablet: {
        breakpoint: {
            max: 1400,
            min: 900,
        },
        items: 2,
        partialVisibilityGutter: 30,
    },
};

const Slider = () => {
    return (
        <Carousel
            additionalTransfrom={0}
            arrows
            autoPlay
            autoPlaySpeed={2000}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            customLeftArrow={<LeftArrow />}
            customRightArrow={<RightArrow />}
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={responsive}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
        >
            {clubActiveImgs.map((item, index) => {
                return <Item key={index + 'activity'} src={item} current={2}></Item>;
            })}
        </Carousel>
    );
};
export default Slider;
