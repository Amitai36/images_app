import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

interface CarouselComponentProsp {
  photos: { lable: string; imgSrc: string }[];
}

function CarouselComponent(props: CarouselComponentProsp) {
  return (
    <Carousel
      infiniteLoop={true}
      dynamicHeight
      useKeyboardArrows
      showStatus={false}
      showThumbs={false}
      transitionTime={2000}
      autoPlay
      stopOnHover
    >
      {props.photos.map((item, key) => (
        <div
          style={{ height: "100%", position: "relative", textAlign: "center" }}
          key={key}
        >
          <img height={"90%"} src={item.imgSrc} />
          <p
            style={{
              height: "10%",
              position: "absolute",
              top: "65%",
              background: "#ffffff80",
              width: "100%",
              color: "black",
            }}
          >
            {item.lable}
          </p>
        </div>
      ))}
    </Carousel>
  );
}

export default CarouselComponent;
