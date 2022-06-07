import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  height: 12rem;

  padding: 0 2rem;

  background-attachment: fixed;
  border-style: solid;
  border-color: #2c2c36;
`;

export const Stepper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 1rem auto 0 auto;

  svg.stepIcon {
    color: white;
  }

  hr {
    border: 1px solid #000;
    width: 25%;
    height: 1;
    margin: auto 1rem;
  }

  @media (max-width: 1366px) {
    width: 75%;
  }
`;

export const TermsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 0.5rem;
  color: var(--white);

  input[type="checkbox"] {
    height: 15px;
    margin-right: 1rem;
  }

  span {
    font-size: 0.6rem;

    span {
      color: var(--gray-300);
      cursor: pointer;
    }
  }
`;

export const Buttons = styled.div`
  margin-top: 3rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;

  button[type="submit"],
  button[type="button"] {
    background-color: #636378;
    color: var(--white);
    width: 4rem;
    height: 1.5rem;
    margin-left: 0.5rem;
    vertical-align: middle;
    font-size: 0.6em;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    border-radius: 1rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
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
  }
`;

export const StepSeparator = styled.hr`
  border: 1px solid #000;
  width: 50%;
  height: 1;
  margin: auto;
`;

export const FormItem = styled.div`
  p {
    margin-bottom: 0.5rem;
    font-size: 0.5rem;
    color: var(--white);
  }

  input[type="text"] {
    display: block;
    box-sizing: border-box;
    width: 100%;
    border-radius: 4px;
    border: 1px solid white;
    padding: 10px 15px;
    margin-bottom: 0.5rem;
    font-size: 0.6rem;

    &.requiredError {
      border-color: red;
    }
  }
`;

export const FormContent = styled.div`
  height: 5rem;
  h2 {
    color: var(--white);
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;

export const PostPurchase = styled.div`
  h2 {
    color: var(--white);
    font-size: 0.9rem;
  }

  h3 {
    color: var(--white);
    font-size: 0.8rem;
    line-height: 1.5rem;
  }
`;

export const PriceInformation = styled.h2`
  color: var(--white);
  font-size: 0.7rem;
  margin: 1rem auto 1rem auto;
`;
