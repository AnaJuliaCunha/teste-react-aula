import { Carousel, Image } from "react-bootstrap";

function ExercicioScreen() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <Image src={"https://picsum.photos/1920/400"} />
          <Carousel.Caption>
            <h3>Slide 1</h3>
            <p>Aqui tem a 1° imagem</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={"https://picsum.photos/1920/400"} />
          <Carousel.Caption>
            <h3>Slide 2</h3>
            <p>Aqui tem a 2° imagem</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={"https://picsum.photos/1920/400"} />
          <Carousel.Caption>
            <h3>Slide 3</h3>
            <p>
              Aqui tem a 3° imagem
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ExercicioScreen;
