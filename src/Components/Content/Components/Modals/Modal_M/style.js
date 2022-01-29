import styled from 'styled-components/';

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

export const ModalContent = styled.div`
  background-color: #555;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
`;