import React from 'react';
import styled from 'styled-components';

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  placeholder?: string;
}

const StyledInput = styled.input<InputProps>`
  font-family: var(--font-primary);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  padding: var(--spacing-3) var(--spacing-5);
  border: 2px solid transparent;
  border-radius: 0.375rem;
  transition: all 0.3s ease;
  width: 100%;

  /* Default colors */
  background-color: var(--color-light);
  color: var(--color-dark);

  /* Focus States */
  &:focus {
    outline: 2px solid var(--primary-color);
    border-color: var(--color-primary);
  }

  /* Disabled state */
  &:disabled {
    background-color: var(--color-light);
    color: var(--color-dark);
    cursor: not-allowed;
  }
`;

const Input = ({ value, onChange, disabled, placeholder }: InputProps) => {
  return (
    <StyledInput
      type="text"
      value={value}
      onChange={onChange}
      disabled={disabled}
      placeholder={placeholder}
    />
  );
};

export default Input;
