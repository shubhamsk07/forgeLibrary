import React from 'react';
import styled from 'styled-components';


const StyledPillButton = styled.button`
  padding: 0.25rem 1rem;
  margin-top:20px;
  margin-bottom:10px;
  font-size: 0.9rem;
  font-weight: 500;
  border-radius: 9999px; /* Makes it pill-shaped */
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  border: 2px solid transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  /* Dark Mode - Default Button */
  background-color: #22c55e; /* Green background */
  color: #ffffff;
  box-shadow: 0 0 0 1px rgba(34, 197, 94, 0.3); /* Green shadow for dark mode */

  &:hover {
    background-color: #16a34a; /* Darker green on hover */
    box-shadow: 0 0 0 1px rgba(22, 163, 74, 0.5);
  }

  &:focus {
    outline: 2px solid #22c55e; /* Green outline on focus */
    background-color: #1e1e1e; /* Darker background */
  }

  &:disabled {
    background-color: #4a4a4a;
    color: #888888;
    cursor: not-allowed;
  }

  /* Light Mode adjustments */
  @media (prefers-color-scheme: light) {
    background-color: #ffffff;
    color: #0a0a0a;
    border: 2px solid #22c55e;
    box-shadow: 0 0 0 1px rgba(34, 197, 94, 0.3);

    &:hover {
      background-color: #f1f1f1;
      box-shadow: 0 0 0 1px rgba(22, 163, 74, 0.5);
    }
  }
`;

const PillButton = ({ children, disabled }: { children: React.ReactNode; disabled?: boolean }) => {
  return (
    <StyledPillButton disabled={disabled}>
      {children}
    </StyledPillButton>
  );
};

export default PillButton;
