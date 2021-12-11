import styled from "styled-components";
import { CarouselProps } from "./carousel";

export const Button = styled.button`
  background: rgba(0, 0, 0, 0.2);
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  border: none;
  border-radius: 100%;
  display: block;
  position: absolute;
  top: 50%;
  left: 8px;
  transition: all 0.3s ease;
  transform: translateY(-50%) rotate(135deg);

  height: 56px;
  width: 56px;

  &:before {
    content: "";
    position: absolute;
    top: 72%;
    left: 72%;
    transform: translate(-120%, -120%) rotate(0deg);
    height: 24px;
    width: 24px;

    border-bottom: 1px solid ${({ theme }) => theme.colors.white};
    border-right: 1px solid ${({ theme }) => theme.colors.white};
  }

  &:last-child {
    left: auto;
    right: 8px;

    &:before {
      top: 28%;
      left: 28%;
      border-bottom: none;
      border-top: 1px solid ${({ theme }) => theme.colors.white};
      transform: translate(20%, 20%) rotate(-90deg);
    }
  }

  &:hover {
    background: rgba(0, 0, 0, 0.4);
    transform: scale(1.1) translateY(-46%) rotate(135deg);
  }
`;
export const CarouselContent = styled.div<CarouselProps>`
  display: flex;
  height: 100%;
  margin: 0 auto;
  overflow-x: scroll;
  padding: 0 0 16px 0;
  scroll-snap-type: x mandatory;
  transform: translate3d(0, 0, 0); /* force the GPU */
  transition: all 0.3s ease-in-out;

  > * {
    scroll-snap-align: center;
    display: block;
    margin-right: ${(p) => p.gap};
    flex: none;
  }

  > *:last-child {
    margin-right: 0;
  }
`;
export const ViewPort = styled.div<CarouselProps>`
  width: ${(p) => p.width};
  height: ${(p) => p.height};
  margin: auto;
  overflow: hidden;
  position: relative;
`;
