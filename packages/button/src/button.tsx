import React from "react";

import styled from "styled-components";
export interface ButtonProps {
  /**
   *  A string | React node to be rendered as the button's content
   */
  children?: React.ReactNode;
  /**
   * Determines the action of the button
   */
  variant?: "primary" | "secondary";
}
const ButtonStyles = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.variant === "primary" ? "#212121" : "#979797"};
  color: #fff;
  font-size: 1rem;
  padding: 9px 24px;
  border: none;
  border-radius: 32px;
  cursor: pointer;
  transition: all 0.3s ease-in;
  outline-offset: 1px;
  outline: 1px solid
    ${(props) => (props.variant === "primary" ? "#212121" : "#979797")};
  &:hover {
    background-color: ${(props) =>
      props.variant === "primary" ? "#ff4158" : "#333"};
    outline: 4px solid
      ${(props) =>
        props.variant === "primary"
          ? "rgba(258, 65, 106, 0.3)"
          : "rgba(0, 0, 0, 0.3)"};
  }
`;
// NOTE: do i need React.componentPropsWithoutRef<'button'>?
export const Button = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<"button">
>(({ children, ...rest }: ButtonProps, ref) => (
  <ButtonStyles ref={ref} {...rest}>
    {children}
  </ButtonStyles>
));

Button.displayName = "Button";
