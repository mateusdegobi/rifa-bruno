import styled from 'styled-components/';

export const Scene = styled.div`
  display: ${props => props.isOn ? 'block' : 'none'};
`;

export const Modal = styled.div`
  display: ${props => props.isOpened ? 'block' : 'none'};
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
`;

export const ModalBody = styled.div`
  background-color: #eee;
  margin: auto;
  border: 1px solid #888;
  width: 80%;
`;

export const ModalHeader = styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: right;
`;

export const CloseButton = styled.div`
  & {
    font-size: 30px;
    padding: 5px 15px;
    cursor: pointer;
  }
  &:after {
    content: '×'
  }
`;

export const ModalContent = styled.div`
  padding: 1rem;
`;

export const Title = styled.h2`
  text-align: center;
`;

// 
// Buttons config
export const ButtonsArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ButtonContinue = styled.div`
  & {
    display: inline-block;
    padding: 10px;
    background-color: tomato;
    cursor: pointer;
    border-radius: 5px;
    color: #ffffffdd;
    font-weight: 500;
    margin: 10px;
    text-align: center;
  }
  &:after {
    content: 'Quero só esse número';
  }
`;

export const ButtonChooseMore = styled.div`
  & {
    display: inline-block;
    padding: 10px;
    background-color: green;
    cursor: pointer;
    margin: 10px;
    border-radius: 5px;
    color: #ffffffdd;
    font-weight: 500;
    text-align: center;
  }
  &:after {
    content: 'Quero escolher mais números';
  }
`;