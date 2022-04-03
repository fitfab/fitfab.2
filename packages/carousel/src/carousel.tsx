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
  const [position, setPosition] = React.useState({ x: 0 });
  const [isLastItem, setIsLastItem] = React.useState(false);
  const [isFirstItem, setIsFirstItem] = React.useState(true);
  const carouselViewRef = React.useRef<HTMLDivElement>(null);
  const scrollAmount = React.useRef(0);
  const init = React.useRef(false);
  const observer = React.useRef<IntersectionObserver | null>(null);

  let options = {
    root: carouselViewRef.current,
    threshold: 1,
  };

  function initiliaze() {
    let options = {
      root: carouselViewRef.current,
      threshold: 0.1,
    };
    init.current = true;
    scrollAmount.current = carouselViewRef.current?.clientWidth! * 0.8;

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.getAttribute("data-slide") === "0"
            ? setIsFirstItem(true)
            : setIsLastItem(true);
        } else {
          entry.target.getAttribute("data-slide") === "0"
            ? setIsFirstItem(false)
            : setIsLastItem(false);
        }
      });
    }, options);

    observer.current.observe(carouselViewRef.current!.children[0]);
    observer.current.observe(
      carouselViewRef.current!.children[
        carouselViewRef.current!.children.length - 1
      ]
    );
  }

  React.useLayoutEffect(() => {
    if (!init.current) {
      initiliaze();
      return;
    }
    carouselViewRef!.current!.scrollBy!({
      behavior: "smooth",
      left: position.x,
    });

    console.log(observer.current);

    return () => {
      console.log("unmount");
      // observer.current!.disconnect();
    };
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
  console.log("render");
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
        <Button
          onClick={shift}
          aria-label="previous"
          data-direction="prev"
          disabled={isFirstItem}
        >
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
        <Button
          onClick={shift}
          aria-label="next"
          data-direction="next"
          disabled={isLastItem}
        >
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
