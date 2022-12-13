import styled from "styled-components";

export const MainSection = styled.article`
    width: 100vw;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #e84a5f;
`;

export const MainTitle = styled.h3`
    font-size: 5rem;
    text-align: center;
    font-family: sans-serif;
    padding: 3rem 0rem 0rem 0rem;
    z-index: 10;
    color: white;
    line-height: 7rem;

    @media (max-width: 56.25rem) {
        font-size: 2rem;
        line-height: normal;
        margin-bottom: 10rem;
        padding: 1rem;
    }
`;

export const MainSectionContainer = styled.div`
    width: calc(100vw - 6rem);
    background-color: #e84a5f;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    position: relative;
    top: -10rem;
    gap: 2rem;
    border: 1px solid black;

    @media (max-width: 56.25rem) {
        grid-template-columns: 1fr;
    }
`;

export const MainImage1 = styled.img`
    width: 34.843rem;
    height: 48.781rem;
    background-color: orange;
    border-radius: 20rem 20rem 0 0;
    overflow: hidden;

    @media (max-width: 56.25rem) {
        width: 100%;
        height: auto;
        border-radius: 30rem 30rem 0 0;
    }
`;

export const ImageContainer = styled.div`
    width: 100%;
    height: 100%;
`;

export const MainImage2 = styled.img`
    width: 20.2rem;
    height: auto;
    position: absolute;
    bottom: 16rem;
    border-radius: 0 6rem 0 0;

    @media (max-width: 56.25rem) {
        display: none;
    }
`;

export const MainImage3 = styled.img`
    width: 20.2rem;
    height: auto;
    position: absolute;
    bottom: 4rem;
    border-radius: 6rem 0 0 0;

    @media (max-width: 56.25rem) {
        display: none;
    }
`;

export const MainTextTitle = styled.h5`
    font-size: 2rem;
    color: white;
    font-family: sans-serif;
    padding: 2rem 0 2rem 0;
`;

export const MainTextDesc = styled.p`
    color: white;
    padding: 0 0 2rem 0;
    font-family: sans-serif;
`;