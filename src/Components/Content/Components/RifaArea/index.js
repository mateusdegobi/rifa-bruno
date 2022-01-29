import React, {useEffect, useState} from "react";
import IconTire from '../../../../assets/image/tire.png';

import * as S from './style';

export default function RifaArea() {
  const [numbers, setNumbers] = useState([]);
  const solds = [
    {
      number: 5,
      buyer: 'John',
      email: 'john@example.com',
      phone: '123-456-1234',
      date_timestamp: new Date().getTime(),
    }, {
      number: 15,
      buyer: 'John',
      email: 'john@example.com',
      phone: '123-456-1234',
      date_timestamp: new Date().getTime(),
    },
  ];

  useEffect(()=> {
    let numbersMutable = [];
    for (let number = 0; number <= 20; number++) {
      numbersMutable.push({
        number,
        isAvailable: true,
      });
    }

    solds.forEach(sold => {
      numbersMutable.forEach(number => {
        if(number.number === sold.number) {
          number.isAvailable = false;
        }
      });
    })

    setNumbers(numbersMutable);
  }, []);

  function HandlerItems() {
    if(numbers.length > 1) {
      return numbers.map(number => {
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