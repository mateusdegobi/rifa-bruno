import React, {useEffect, useState} from "react";
import IconTire from '../../../../assets/image/tire.png';
import {getDatabase, ref, onValue, set} from 'firebase/database';

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

export default function RifaArea({setIsOpened_modal, setChoosedNumbed}) {
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
    for (let number = 1; number <= 600; number++) {
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

    // Percorre o array solds para setar os números de reserva em allNumbers
    preSolds.forEach(sold => {
      allNumbers.forEach(number => {
        if(number.number === sold.number) {
          number.isAvailable = false;
          number.presold = true;
        }
      });
    });

    setNumbersFiltered(allNumbers);
  }, [solds, preSolds]);

  function handlerBuyOrder(number) {
    setChoosedNumbed(number);
    setIsOpened_modal(true);
    // const firebase = getDatabase();
    // const query_path = '/presolds/';
    // let query_length;
    // onValue(ref(firebase, query_path), snapshot => {
    //   const data = snapshot.val();
    //   query_length = data.length;
    // });

    // set(ref(firebase, `${query_path}/${query_length}/`), {
    //   number,
    //   buyer: 'John',
    //   email: 'john@example.com',
    //   phone: '123-456-1234',
    //   date_timestamp: new Date().getTime(),
    // });
  }

  function HandlerItems() {
    if(numbersFiltered.length > 1) {
      return numbersFiltered.map(number => {
        if (number.isAvailable) {
          return(
            <S.AreaTire onClick={() => handlerBuyOrder(number.number)}>
              <S.TireIcons src={IconTire} alt={number} />
              <S.TextTire status="on">{number.number}</S.TextTire>
              <S.TextStatus status="on">Disponível</S.TextStatus>
            </S.AreaTire>
          )
        } else {
          if (!number.presold) {
            return (
              <S.AreaTire onClick={() => alert('Rodando: o número já foi comprado.')}>
                <S.TireIconsOff src={IconTire} alt={number} />
                <S.TextTire status="off">{number.number}</S.TextTire>
                <S.TextStatus status="off">Rodando</S.TextStatus>
              </S.AreaTire>
            );
          } else {
            return(
              <S.AreaTire onClick={() => alert('Examinando: o número foi reservado e será validado em até 24 horas.')}>
                <S.TireIconsPre src={IconTire} alt={number} />
                <S.TextTire status="wait">{number.number}</S.TextTire>
                <S.TextStatus status="wait">Examinando</S.TextStatus>
              </S.AreaTire>
            )
          }
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