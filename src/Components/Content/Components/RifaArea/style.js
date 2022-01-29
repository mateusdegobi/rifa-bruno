import styled from 'styled-components/';

export const TireIcons = styled.img`
  width: 100px;
  height: 100px;
  cursor: default;
`;
export const TireIconsOff = styled.img`
  width: 100px;
  height: 100px;
  opacity: 0.1;
  cursor: not-allowed;
`;
export const TireIconsPre = styled.img`
  width: 100px;
  height: 100px;
  opacity: 0.3;
  cursor: not-allowed;
`;

export const AreaTire = styled.div`
  width: 100px;
  height: 130px;
  margin: 15px 10px;
  cursor: pointer;
`;

export const TextTire = styled.p`
  margin: -67px 0px;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  color: ${props => {
    if (props.status === 'on')
      return '#50990C';
    else if (props.status === 'wait')
      return '#e3a554';
    else
      return '#CC3C10';
  }};
  opacity: ${props => {
    if (props.status === 'on')
      return 1;
    else if (props.status === 'wait')
      return 0.7;
    else
      return 0.2;
  }};
`;

export const TextStatus = styled.p`
  text-align: center;
  font-size: 10px;
  font-weight: 500;
  margin: 110px 0px;

  cursor: ${props => {
    if (props.status === 'on')
      return 'default';
    else
      return 'not-allowed';
  }};

  color: ${props => {
    if (props.status === 'on')
      return '#50990C';
    else if (props.status === 'wait')
      return '#e3a554';
    else
      return '#CC3C10';
  }};
`;

export const Area = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: rows;
  justify-content: space-around;
  width: 90%;
  margin: 0px 5%;
`;