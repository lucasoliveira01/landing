import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: auto;
  height: 3.75rem;
  line-height: 3.75rem;
  vertical-align: middle;
  padding: 0 1.875rem;
  font-size: 1.125em;
  font-family: "Sora", sans-serif;
  font-weight: 500;
  border: solid;
  border-radius: 2rem;
  border-width: 3px;
  border-color: var(--gray-300);
  color: var(--white);
  background: transparent;
  align-self: center;

  &:hover {
    border-color: var(--white);
  }
  svg {
    width: 20px;
    height: 20px;
  }

  svg:first-child {
    margin-left: 1rem;
  }

  svg.closeIcon {
    margin-left: 1rem;
  }
`;
