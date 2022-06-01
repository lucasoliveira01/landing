import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  min-height: 100vh;
  flex-direction: column;
  text-align: left;
`;

export const FeaturesSubtitle = styled.h3`
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

export const FeaturesTitle = styled.h1`
  color: var(--white);
  font-family: "Sora", sans-serif;
  letter-spacing: 0.025rem;
  width: calc(100% + 0.025rem);
  font-size: 4em;
  line-height: 1.25;
  font-weight: 700;
  margin-bottom: 2rem;
`;

export const FeaturesDetails = styled.p`
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

export const FeaturesDescription = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Feature = styled.div`
  width: 40%;

  * {
    margin-top: 1.5rem;
  }

  h2 {
    color: var(--white);
    font-family: "Sora", sans-serif;
    font-size: 1.5em;
    line-height: 1.5;
    font-weight: 400;
  }

  p {
    color: var(--gray-300);
    font-family: "Inter", sans-serif;
    font-size: 1.125em;
    line-height: 1.75;
    font-weight: 400;
  }
`;
