import styled from "styled-components";

export const ConfirmeButton = styled.div`
  & {
    display: inline-block;
    padding: 10px;
    background-color: ${props => props.tintColor || 'green'};
    cursor: pointer;
    margin: 10px;
    border-radius: 5px;
    color: #ffffffdd;
    font-weight: 500;
    text-align: center;
  }
  &:after {
    content: '${props => props.title}';
  }
`;