import React from "react";
import { Button, Navigation, CarouselContent, ViewPort } from "./partials";

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

  /**
   * gap -- the space between each slides and
   * it should be in any we unit (px, %, em, rem, ...)
   * default to 16px
   */
  gap?: string;
}

export const Carousel = ({
  children = "Place content here",
  width = "100%",
  height = "320px",
  gap = "16px",
}: CarouselProps) => {
  const carouselViewRef = React.useRef<HTMLDivElement>(null);
  const scrollAmount = React.useRef(0);
  const [position, setPosition] = React.useState({ x: 0 });

  React.useLayoutEffect(() => {
    scrollAmount.current = carouselViewRef.current?.clientWidth! * 0.8;
    carouselViewRef!.current!.scrollBy!({
      behavior: "smooth",
      left: position.x,
    });
  }, [position]);

  const shift = (e: React.MouseEvent<HTMLElement>) => {
    e.persist();
    setPosition({
      x:
        e.currentTarget.dataset.direction === "prev"
          ? -scrollAmount.current
          : scrollAmount.current,
    });
  };
  return (
    <ViewPort className="viewport" width={width} height={height}>
      <CarouselContent
        className="carousel-content"
        ref={carouselViewRef}
        gap={gap}
      >
        {children}
      </CarouselContent>
      <Navigation>
        <Button onClick={shift} aria-label="previous" data-direction="prev">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </Button>
        <Button onClick={shift} aria-label="next" data-direction="next">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Button>
      </Navigation>
    </ViewPort>
  );
};
