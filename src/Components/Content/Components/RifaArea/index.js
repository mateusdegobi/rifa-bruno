import React, {useEffect, useState} from "react";
import IconTire from '../../../../assets/image/tire.png';

import * as S from './style';

export default function RifaArea() {
  const [numbers, setNumbers] = useState([]);
  const solds = [
    {
      number: 10,
    },
    {
      number: 2,
    },
    {
      number: 5,
    },
    {
      number: 1,
    },
    {
      number: 4,
    },
  ];

  useEffect(()=> {
    let numbersMutable = [];
    for (let number = 0; number <= 600; number++) {
      numbersMutable.push({
        number,
        isAvailable: true,
      });
    }
    setNumbers(numbersMutable);
  }, []);

  function HandlerItems() {
    if(numbers.length > 1) {
      return numbers.map(number => (
        <S.TireIcons src={IconTire} alt="" />
      ));
    } else {
      return <img src={IconTire} alt="" />;
    }
  }



  return(
    <div>
      <HandlerItems />
    </div>
  );
}