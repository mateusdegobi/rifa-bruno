import React from 'react';

import * as S from './style';

export default function FormOneNumber({number, setBuyer, setPhone1, setPhone2}) {
  return (
    <div>
      <S.TextInput type="text" placeholder="Digite seu nome completo" onChange={val => setBuyer(val.target.value)} />
      <S.TextInput type="tel" placeholder="Número do Whatsapp" onChange={val => setPhone1(val.target.value)} />
      <S.TextInput type="tel" placeholder="Segundo número (opcional)" onChange={val => setPhone2(val.target.value)} />

      <p>Seu número é: <b>{number}</b>.</p>
    </div>
  );
}
