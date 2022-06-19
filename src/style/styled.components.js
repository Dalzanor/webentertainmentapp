import styled from "styled-components";

export const InlineDot = styled.span`
  border-radius: 50%;
  background: white;
  opacity: 0.75;
  padding: 2px;
  margin: 10px;
`;

export const PlayHover = styled.div`
  height: 174px;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  border-radius: 8px 8px 0 0;
  color: white;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  z-index: 1;
  :hover {
    opacity: 1;
  }
  button {
    color: white;
    height: 48px;
    width: 100px;
    border-radius: 48px;
    border: none;
    background: rgba(255, 255, 255, 0.3);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    cursor: pointer;
  }
`;

export const Bookmark = styled.div`
  height: 28px;
  width: 28px;
  position: absolute;
  top: 8px;
  right: 12px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  transition: ease-in-out 0.5s;
  :hover {
    background: rgb(148, 44, 44);
  }
`;

export const TitleText = styled.h1`
  color: white;
  font-weight: 300;

  @media (max-width: 768px) {
    margin-top: 30px;
  }

  @media (max-width: 300px) {
    font-size: larger;
  }
`;
