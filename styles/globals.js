import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  button{
    cursor: pointer;
  }

  :root{
    --white: #ffffff;

    --gray-300: #7B7B8F;
    --gray-400: #5B5B70;
    --gray-900: #1A1A21;

    --purple-500: #6746ED;
  }

  body:before {
    content: "";
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    transform: scale(1);
    background-attachment: scroll;
    background-image: linear-gradient(
      to top,
      rgba(27, 27, 34, 0.961),
      rgba(27, 27, 34, 0.961)
    ),
    url("images/background.svg");
    /* background-image: url("images/background.svg"); */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #1a1a21;
  }
  :root {
    --site-language-direction: ltr;
    --site-language-alignment: left;
  }

  html {
    font-size: 18pt;
  }

  
  @media (max-width: 1080px){
      html{
          font-size: 93.75%;
      }
  }

  @media (max-width: 720px){
      html{
          font-size: 87.5%;
      }
  }

  .react-modal-overlay {
        background: rgba(0,0,0,0.5) ;
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem ;
    }

    .react-modal-close{
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.8);
        }
    }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
  min-height: 100vh;
  overflow: hidden;
  padding: 0 1rem 0 1rem;
  background: transparent;
`;

export const Main = styled.div`
  display: flex;
  position: relative;
  max-width: 100%;
  align-items: center;
  justify-content: center;
  flex-grow: 0;
  flex-shrink: 0;
  text-align: center;
  background-color: transparent;

  & > .inner {
    position: relative;
    border-radius: inherit;
    padding: 0rem 0rem;
    max-width: 100%;
    width: 48rem;
  }
  /* 
  & > .inner > :first-child {
    margin-top: 0 !important;
  }
  & > .inner > :last-child {
    margin-bottom: 0 !important;
  }
  & > .inner > .full {
    margin-left: calc(0rem);
    width: calc(100% + 0rem + 0.4725px);
    max-width: calc(100% + 0rem + 0.4725px);
  }
  & > .inner > .full:first-child {
    margin-top: 0rem !important;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
  }
  & > .inner > .full:last-child {
    margin-bottom: 0rem !important;
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
  }
  & > .inner > .full.screen {
    width: 100vw;
    max-width: 100vw;
    position: relative;
    border-radius: 0 !important;
    left: 50%;
    right: auto;
    margin-left: -50vw;
  } */
`;
