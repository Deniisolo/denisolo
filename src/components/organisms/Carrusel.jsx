import Slider from "react-slick";
export function Carrusel(props) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Slider {...settings}>
        {props.images.map((image) => {
          return <img src={`${process.env.PUBLIC_URL}${image}`} alt="..." />;
        })}
      </Slider>
    </div>
  );
}
