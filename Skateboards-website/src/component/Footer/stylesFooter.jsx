import styled, { keyframes } from "styled-components";
import { Keyframes } from "styled-components";

export const Footer = styled.footer`
    width: 100vw;
    height: 100vh;
    background-color: #e84a5f;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;

    @media (max-width: 900px) {
        height: auto;
    }
`;

export const FooterTitle = styled.h3`
    font-size: 3.5rem;
    width: 100vw;
    height: auto;
    text-align: center;
    color: white;
    font-family: 'Signika', sans-serif;
    margin-bottom: 3rem;
    font-weight: 500;

    @media (max-width: 460px) {
        font-size: 2rem;
        padding-inline: 3rem;
    }

    @media (max-width: 900px) {
        margin-bottom: 1rem;
        font-size: 2.5rem;
        padding-inline: 1rem;
        margin-top: 5rem;
    }
`;

export const Form = styled.form`
    width: calc(100vw - 4rem);
    height: 50vh;
    display: grid;
    grid-template-columns: 1fr;
    position: relative;

    @media (max-width: 900px) {
        height: 80vh;
        margin-bottom: 15rem;
    }
`;

export const Label = styled.label`
    font-family: sans-serif;
    color: white;
`;

export const Input = styled.input`
    width: 100%;
    height: 2rem;
    font-size: 1rem;
    border: none;
    border-bottom: 1px solid white;
    background-color: transparent;
    color: white;

    &focus {
        outline: none;
    }
`;

export const InputDetails = styled.div`
    width: 100%;
    height: 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 4rem;

    @media (max-width: 900px) {
        height: auto;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        gap: 0rem;
    }
`;

export const Submit = styled.button`
    width: 5rem;
    height: 2.5rem;
    background-color: #e84a5f;
    color: white;
    box-shadow: 3px 3px white;
    border: 1px solid white;
    animation: ${submit} 0.5s ease forwards;
    cursor: pointer;

    &hover {
        animation: ${submitHover} 0.5s ease forwards;
    }
`;

export const FooterLinks = styled.span`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom: 30px;

    @media (max-width: 900px) {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
    }
`;

export const FooterTag = styled.a`
    color: white;
    text-decoration: none;
    font-family: sans-serif;

    &:nth-child(1) {
        margin-left: 2rem;
    }
    &:nth-child(4) {
        margin-right: 2rem;
    }

    @media (max-width: 900px) {
        margin: 1rem 2rem;
    }
`;

export const SocialLink = styled.a`
    color: white;
    text-decoration: none;
    margin-inline: 1rem;
    font-family: sans-serif;

    &hover {
        text-decoration: underline;
    }
`;

export const submitHover = keyframes`
    0% {
        box-shadow: 2px 2px white ;
    }
    10% {
        box-shadow: 0px 0px;
    }
    15% {
        box-shadow: inset 0px 0px;
    }
    100% {
        transform: translate(2px, 2px);
        box-shadow: inset 0 -40px 0 0 white;
        color: #e84a5f;
    }
`;

export const submit = keyframes`
    0% {
        transform: translate(2px, 2px);
        box-shadow: inset 0 -40px 0 0 white;
        color: white;
    }

    85% {
    box-shadow: inset 0px 0px;
    }

    90% {
        box-shadow: 0px 0px;
    }

    100% {
        box-shadow: 2px 2px white ;
    }
`;

export const InputBorder = styled.span`
    @media (max-width: 900px) {
        margin: 1rem 0rem;
    }
`;

export const FooterSocialLink = styled.span`
    @media (max-width: 900px) {
        margin-left: 1rem;
    }
`;

