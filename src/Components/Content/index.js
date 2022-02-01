import React, {useState} from 'react';

import RifaArea from './Components/RifaArea';
import ModalM from './Components/Modals/Modal_M';

export default function Content() {
  const [isOpened, setIsOpened] = useState(false);
  const [choosedNumber, setChoosedNumbed] = useState('0');

  return (
    <nav>
      <ModalM 
        isOpened_modal={isOpened} 
        setIsOpened_modal={setIsOpened} 
        choosedNumber={choosedNumber} 
      />
      <RifaArea setIsOpened_modal={setIsOpened} setChoosedNumbed={setChoosedNumbed} />
    </nav>
  );
}
