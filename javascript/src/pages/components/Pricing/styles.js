import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 78%;
  margin: 4rem auto 0 auto;
  min-height: 100vh;
  flex-direction: column;
  text-align: left;
`;

export const Subtitle = styled.h3`
  text-transform: uppercase;
  color: var(--gray-300);
  font-family: "Sora", sans-serif;
  letter-spacing: 0.1rem;
  width: calc(80% + 0.1rem);
  font-size: 1em;
  line-height: 1.625;
  font-weight: 600;
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  color: var(--white);
  font-family: "Sora", sans-serif;
  letter-spacing: 0.025rem;
  width: calc(100% + 0.025rem);
  font-size: 4em;
  line-height: 1.25;
  font-weight: 700;
  margin-bottom: 2rem;
`;

export const Details = styled.p`
  color: var(--gray-300);
  font-family: "Inter", sans-serif;
  font-size: 1.25em;
  line-height: 1.75;
  font-weight: 400;
  margin-bottom: 2rem;

  & br + br {
    margin-top: 1.05rem;
  }

  & a {
    text-decoration: underline;
  }
  & a:hover {
    text-decoration: none;
  }
`;

export const Prices = styled.div`
  width: 180%;
  margin: 4rem -15rem;
  border-radius: 1rem;
  min-height: 100vh;

  text-align: left;
  padding: 5.5rem 5.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-attachment: fixed;
  background-color: #23232b;
  border-style: solid;
  border-color: #2c2c36;
  background-image: url(images/pricingContainer.svg);
  background-position: center;
  background-position-x: center;
  background-position-y: center;
  background-repeat: repeat;
  background-size: cover;

  @media (max-width: 1366px) {
    width: 135%;
    margin: 4rem -6rem;
  }
`;

export const Price = styled.div`
  width: 40%;

  &.recommended {
    h3 {
      color: var(--white);
    }

    h2 {
      font-weight: 700;
    }

    button {
      background-color: #6746ed;
      color: #ffffff;

      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 10rem;
      height: 3.875rem;
      line-height: 3.875rem;
      padding: 0 1.9375rem;
      font-family: "Sora", sans-serif;
      font-weight: 300;
      border-radius: 2rem;

      svg {
        visibility: visible;
        margin-left: 0.5rem;
      }
    }
  }
  h3 {
    color: var(--gray-300);
    font-family: "Sora", sans-serif;
    font-size: 1.25em;
    line-height: 1.75;
    font-weight: 600;
    margin-bottom: 2rem;
  }

  h2 {
    color: var(--white);
    font-family: "Sora", sans-serif;
    letter-spacing: 0.025rem;
    width: calc(100% + 0.025rem);
    font-size: 4em;
    line-height: 1.25;
    font-weight: 400;
    margin-bottom: 2rem;
  }

  p {
    color: var(--gray-300);
    font-family: "Inter", sans-serif;
    font-size: 1.125em;
    line-height: 1.75;
    font-weight: 400;
    margin-bottom: 2rem;
  }

  ul {
    width: 100rem;
    display: inline-block;
    max-width: 100%;
    vertical-align: middle;
    list-style: none;

    li {
      display: flex;
      align-items: top;

      svg {
        margin-top: 0.5rem;
        width: 40px;
        position: relative;
      }

      p {
        color: #7b7b8f;
        padding: 0 0.625rem;
        font-family: "Inter", sans-serif;
        font-size: 1em;
        line-height: 2;
        font-weight: 300;
        margin: 0;
      }
    }
  }

  button {
    background-color: #636378;
    color: #1a1a21;
    width: 8rem;
    height: 3rem;
    line-height: 3rem;
    vertical-align: middle;
    padding: 0 1.5rem;
    font-size: 1.125em;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    border-radius: 2rem;
    margin-top: 2rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

    svg {
      visibility: hidden;
    }
  }
`;
