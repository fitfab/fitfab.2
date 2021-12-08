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
  background-color: ${({ variant, theme }) =>
    variant === "primary" ? theme.colors.dark : theme.colors.gray75};
  color: #fff;
  font-family: inherit;
  font-size: 1rem;
  padding: 9px 24px;
  border: none;
  border-radius: 32px;
  cursor: pointer;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all 0.3s ease-in;
  outline-offset: 1px;
  outline: 1px solid
    ${({ theme, variant }) =>
      variant === "primary" ? theme.colors.dark : theme.colors.gray75};
  &:hover {
    background-color: ${({ theme, variant }) =>
      variant === "primary" ? theme.colors.brand : theme.colors.gray50};
    outline: 4px solid
      ${({ theme, variant }) =>
        variant === "primary" ? theme.colors.brand25 : theme.colors.gray25};
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
