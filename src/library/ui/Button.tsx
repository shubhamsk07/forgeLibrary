import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  children: ReactNode;
  size?: 'sm' | 'base' | 'lg';
  variant?: 'filled' | 'outline';
  onClick?: () => void;
  disabled?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  font-family: var(--font-primary);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  text-align: center;
  cursor: pointer;
  padding: var(--spacing-3) var(--spacing-5);
  border: 2px solid transparent;
  border-radius: 0.375rem;
  transition: all 0.3s ease;

  /* Default colors */
  background-color: var(--color-primary);
  color: var(--color-accent);

  /* Hover and Focus States */
  &:hover {
    background-color: var(--color-dark);
    color: var(--color-light);
  }

  &:focus {
    outline: 2px solid var(--primary-color);
    background-color: var(--color-secondary);
  }

  /* Disabled state */
  &:disabled {
    background-color: var(--color-light);
    color: var(--color-dark);
    cursor: not-allowed;
  }
`;

const Button = ({ children, onClick, disabled }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
