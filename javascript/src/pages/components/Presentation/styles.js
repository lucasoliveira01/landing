import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 90%;
  min-height: 95vh;
  margin: 9rem auto 0 auto;
  flex-direction: column;
  text-align: center;

  @media (max-width: 1366px) {
    margin: 3rem auto 0 auto;
  }
`;

export const PresentationSubtitle = styled.h3`
  text-transform: uppercase;
  color: #ffffff;
  font-family: "Sora", sans-serif;
  letter-spacing: 0.1rem;
  width: calc(100% + 0.1rem);
  font-size: 1em;
  line-height: 1.625;
  font-weight: 600;
  margin-bottom: 2rem;

  & br + br {
    margin-top: 0.975rem;
  }

  & a {
    text-decoration: underline;
  }

  & a:hover {
    text-decoration: none;
  }

  & mark {
    background-color: transparent;
  }
`;

export const PresentationTitle = styled.h1`
  color: #7b7b8f;
  font-family: "Sora", sans-serif;
  letter-spacing: 0.025rem;
  width: calc(100% + 0.025rem);
  font-size: 4.375em;
  line-height: 1.25;
  font-weight: 700;
  margin-bottom: 2rem;

  & br + br {
    margin-top: 0.75rem;
  }
  & a {
    text-decoration: none;
  }
  & a:hover {
    text-decoration: underline;
  }
  & mark {
    color: #f5eded;
    background-color: transparent;
  }
`;

export const PresentationDetails = styled.p`
  color: #7b7b8f;
  font-family: "Inter", sans-serif;
  font-size: 1.375em;
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

// export const ContainerContent = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   flex-direction: column;
//   margin: 0 auto;

//   span {
//     margin-bottom: 2rem;
//     font-size: 1.5rem;
//     font-weight: 600;
//   }

//   p {
//     font-size: 2rem;
//     color: var(--gray-300);
//     text-align: center;
//     line-height: 4rem;
//   }
// `;

// export const Title = styled.h1`
//   color: #7b7b8f;
//   font-family: "Sora", sans-serif;
//   letter-spacing: 0.025rem;
//   width: calc(100% + 0.025rem);
//   text-align: center;
//   font-size: 6.5rem;
//   line-height: 1.25;
//   font-weight: 700;

//   br + br {
//     margin-top: 0.75rem;
//   }

//   a {
//     text-decoration: none;
//   }

//   a:hover {
//     text-decoration: underline;
//   }
//   mark {
//     color: #f5eded;
//     background-color: transparent;
//   }

//   @media (max-width: 736px) {
//     not(:first-child) {
//       margin-top: 0rem !important;
//     }
//     not(:last-child) {
//       margin-bottom: 0rem !important;
//     }

//     letter-spacing: 0.021875rem;
//     width: calc(100% + 0.021875rem);
//     font-size: 3.25em;
//     line-height: 1.375;
//   }

//   @media (max-width: 360px) {
//     font-size: 3.25em;
//   }
// `;
