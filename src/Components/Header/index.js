import React from 'react';

import * as S from './style';
import path_car from '../../assets/image/car.png'

export default function Header() {
  return (
    <S.Header>
      <h2>Rifa do Bruno</h2>
      <img src={path_car} alt="" />
    </S.Header>
  );
}
