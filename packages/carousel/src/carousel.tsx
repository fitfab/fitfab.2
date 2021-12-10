import React from "react";
import { Button, CarouselContent, ViewPort } from "./partials";

export interface CarouselProps {
  /**
   *  A string | React node to be rendered as the carousel's content
   */
  children?: React.ReactNode;
  /**
   * The widht of the carousel default to 100%
   */
  width?: string;
  /**
   * The height of the carousel default to 320px
   */
  height?: string;
}

export const Carousel = ({
  children = "Place content here",
  width = "100%",
  height = "320px",
}: CarouselProps) => {
  const carouselViewRef = React.useRef<HTMLDivElement>(null);
  const scrollby = React.useRef(0);
  const [position, setPosition] = React.useState({ x: 0 });

  React.useLayoutEffect(() => {
    scrollby.current = carouselViewRef.current?.clientWidth! * 0.4;
    carouselViewRef!.current!.scrollBy!({
      behavior: "smooth",
      left: position.x,
    });
  }, [position]);

  const moveBy = (e: React.MouseEvent<HTMLElement>) => {
    e.persist();
    setPosition({
      x:
        window.innerWidth / 2 > e.clientX
          ? -scrollby.current
          : scrollby.current,
    });
  };

  return (
    <ViewPort className="viewport" width={width} height={height}>
      <CarouselContent className="carousel-content" ref={carouselViewRef}>
        {children}
      </CarouselContent>
      <Button onClick={moveBy} aria-label="previous"></Button>
      <Button onClick={moveBy} aria-label="next"></Button>
    </ViewPort>
  );
};
