import Slider from "react-slick";

const slider = () => {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src="assets/SliderImg.png" alt="slider" />
        </div>
        <div>
          <img src="assets/SliderImg.png" alt="slider" />
        </div>
        <div>
          <img src="assets/SliderImg.png" alt="slider" />
        </div>
        <div>
          <img src="assets/SliderImg.png" alt="slider" />
        </div>
      </Slider>
    </div>
  );
};

export default slider;
