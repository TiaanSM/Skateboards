import styled from "styled-components";

export const PartnerSection = styled.section`
    width: 100vw;
    height: 110vh;
    background-color: lightblue;
    position: relative;
    overflow: hidden;
    background-image: url("../img/img-8.jpg");
    background-size: cover;
    background-position: absolute;
`;

export const PartnerTitle = styled.h5`
    position: absolute;
    bottom: 3rem;
    left: 2.5rem;
    font-size: 5.875rem;
    font-family: sans-serif;
    color: #e84a5f;
`;

export const PartnerDesc = styled.p`
    position: absolute;
    bottom: 4rem;
    right: 2.5rem;
    font-size: 1.4rem;
    color: #e84a5f;
    font-family: sans-serif;
`;