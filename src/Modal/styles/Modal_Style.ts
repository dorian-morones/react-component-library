import styled from "styled-components";

export const ModalOverlay = styled.div`
    position: fixed;
    display: block;
    overflow: auto;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 20;
`;

export const ModalContainer = styled.div`
  margin: 5% auto;
  background-color: #333;
  border-radius: 8px;
  width: fit-content;
  position: relative;
  color: #fff;
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 50px;
  min-width: 400px;
  padding: 10px 20px;
  background-color: #000;
  border-radius: 8px 7px 0 0;
`;

export const ModalContent = styled.div`
  padding: 10px 20px;
`;