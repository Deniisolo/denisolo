import { Carousel } from "flowbite-react";
export function Carrusel(props) {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        {props.images.map((image) => {
          return <img src={`${process.env.PUBLIC_URL}${image}`} alt="..." />;
        })}
      </Carousel>
    </div>
  );
}
