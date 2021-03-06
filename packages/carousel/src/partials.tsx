import styled from "styled-components";
import { CarouselProps } from "./carousel";

export const Button = styled.button`
  background: #000;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  border: 1px solid #000;
  border-radius: 100%;
  display: flex;
  position: absolute;
  top: calc(83% - 36px);
  left: calc(100% - 88px);
  transition: all 0.5s ease;
  height: 36px;
  width: 36px;

  &:disabled {
    cursor: default;
    background: #fff;
    border: 1px solid #9e9e9e;
  }
  &:disabled > svg {
    transition: all 0.3s ease-in;
    stroke: #9e9e9e;
  }

  &:last-child {
    left: auto;
    right: 0px;
  }

  & > svg {
    width: 32px;
    height: 32px;
    stroke: #fff;
  }

  &:enabled:hover {
    border-color: #000;
  }

  &:enabled:hover > svg {
    transition: all 0.3s ease-in;
    stroke: #fff;
  }
`;

export const Navigation = styled.div`
  position: relative;
  height: 56px;

  &:before {
    content: "";
    position: absolute;
    top: calc(50% - 1px);
    left: 0;
    width: 100%;
    height: 1px;
    background: #9e9e9e;
  }
`;
export const CarouselContent = styled.div<CarouselProps>`
  display: flex;
  height: 100%;
  margin: 0 auto;
  overflow-x: scroll;
  overflow-y: hidden;
  padding: 0 0 16px 0;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  > * {
    scroll-snap-align: start;
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
  position: relative;
  transition: all 0.5s ease;
`;
