import React, {useEffect, useState} from "react";
import IconTire from '../../../../assets/image/tire.png';




export default function RifaArea() {
  const [itemsArray, setItemsArray] = useState([]);

  useEffect(()=> {
    
  }, []);

  function HandlerItems() {
    return <img src={IconTire} alt="" />;
  }



  return(
    <div>
      <HandlerItems />
    </div>
  );
}