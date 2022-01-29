import React, {useEffect, useState} from "react";
import IconTire from '../../../../assets/image/tire.png';
import {getDatabase, ref, onValue} from 'firebase/database';

import * as S from './style';

const preset_solds = [
  {
    number: 17,
    buyer: 'John',
    email: 'john@example.com',
    phone: '123-456-1234',
    date_timestamp: new Date().getTime(),
  }
];

export default function RifaArea() {
  const [solds, setSolds] = useState(preset_solds);
  const [preSolds, setPreSolds] = useState(preset_solds);
  const [numbersFiltered, setNumbersFiltered] = useState([]);

  // Recupera dados do Firebase e seta em solds
  useEffect(() => {
    // Função para request no Firebase
    // Recebe a query do DB e a função de set do state
    function requestFirebase(strQuery, fncSet) {
      const firebase = getDatabase();
      const query = ref(firebase, strQuery);
      onValue(query, snapshot => fncSet(snapshot.val()));
    }
    requestFirebase('/solds/', setSolds);
    requestFirebase('/presolds/', setPreSolds);
  }, []);

  // Filtra os números à venda (numbers) com solds
  useEffect(()=> {
    // Guarda todos os dados dos números
    // allNumbers = numbers
    const allNumbers = [];
    
    // Percorre e guarda os presets em allNumbers
    for (let number = 0; number <= 20; number++) {
      allNumbers.push({
        number,
        isAvailable: true,
        presold: false,
      });
    }

    // Percorre o array solds para setar os números vendidos em allNumbers
    solds.forEach(sold => {
      allNumbers.forEach(number => {
        if(number.number === sold.number) {
          number.isAvailable = false;
        }
      });
    });

    preSolds.forEach(sold => {
      allNumbers.forEach(number => {
        if(number.number === sold.number) {
          number.isAvailable = false;
          number.presold = true;
        }
      });
    });

    setNumbersFiltered(allNumbers);
  }, [solds]);

  function HandlerItems() {
    if(numbersFiltered.length > 1) {
      return numbersFiltered.map(number => {
        if (number.isAvailable) {
          return(
            <S.AreaTire>
              <S.TireIcons src={IconTire} alt={number} />
              <S.TextTire>{number.number}</S.TextTire>
            </S.AreaTire>
          )
        } else {
          return (
            <S.AreaTire>
              <S.TireIconsOff src={IconTire} alt={number} />
              <S.TextTire>{number.number}</S.TextTire>
            </S.AreaTire>
          );
        }
      });
    } else {
      return <img src={IconTire} alt="" />;
    }
  }


  return(
    <S.Area>
      <HandlerItems />
    </S.Area>
  );
}