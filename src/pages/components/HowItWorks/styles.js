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

export const ImageExplanation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: -9rem;
  width: 150%;

  @media (max-width: 1366px) {
    width: 100%;
    margin: 0 auto;

    .howWorksImage {
      width: 12%;
      height: 12%;
    }
  }
`;

export const ImageDescription = styled.div`
  width: 38%;

  h2 {
    color: var(--white);
    font-family: "Sora", sans-serif;
    font-size: 2.25em;
    line-height: 1.5;
    font-weight: 600;
    margin-bottom: 2rem;
  }

  p {
    color: var(--gray-300);
    font-family: "Inter", sans-serif;
    font-size: 1.125em;
    line-height: 1.75;
    font-weight: 400;
  }

  @media (max-width: 1366px) {
    p,
    h2 {
      font-size: 90%;
    }
  }
`;
