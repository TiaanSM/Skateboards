import styled from "styled-components";

export const InfoContainer = styled.div`
    width: 100vw;
    height: auto;
    position: relative;
    background-color: #def2f1;
    font-family: sans-serif;
`;

export const VideoContainer = styled.div`
    width: 500px;
    height: 385px;
    background-color: #333;
    border: 1px solid red;
    padding: 1rem;
`;

export const ContainerText = styled.div`
    width: 100vw;
    height: 9rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TopParagraph = styled.p`
    width: 500px;
    height: auto;
    color: #e84a5f;
    text-align: center;
`;

export const InfoMainContainer = styled.div`
    width: 100vw;
    height: auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
    padding-bottom: 5rem;
`;

export const QuestionParagraph = styled.div`
    width: 320px;
    height: auto;
    border: 1px solid red;
    padding: 1rem;
`;
  
export const QuestionTitle = styled.h3`
    font-size: 3rem;
    color: #e84a5f;
    padding-bottom: 1rem;
`;
  
export const QuestionDesc = styled.p`
    color: #e84a5f;
    padding-bottom: 1rem;
`;

export const QuestionBtn = styled.button`
    padding: 0.5rem 1rem;
    color: #e84a5f;
    box-shadow: 3px 3px #e84a5f;
    border: 1px solid #e84a5f;
    background-color: #def2f1;
`;
  
export const LastParagraph = styled.div`
    width: 320px;
    height: auto;
    border: 1px solid red;
    padding: 1rem;
`;
  
export const LastTitle = styled.h3`
    color: #e84a5f;
    font-size: 3rem;
    padding-bottom: 1rem;
`;

export const LastDesc = styled.p`
    color: #e84a5f;
`;