import React, {useState} from "react";

import * as S from "./style";

export default function ModalM({isOpened_modal, setIsOpened_modal, choosedNumber}) {
  const [scene1, setScene1] = useState(true);
  const [scene2, setScene2] = useState(false);

  function nextScene_continue() {
    setScene1(false);
    setScene2(true);
  }

  function resetConfig() {
    setScene1(true);
    setScene2(false);
    setIsOpened_modal(false)
  }

  return (
    <S.Modal size={[300, 800]} isOpened={isOpened_modal}>
      <S.ModalBody>
        <S.ModalHeader>
          <S.CloseButton onClick={resetConfig} />
        </S.ModalHeader>

      <S.Scene1 isOn={scene1}>
        <S.ModalContent>
          <S.Title>Agora reserve seu número</S.Title>
          <p>Você escolheu o número <b>{choosedNumber}</b></p>
          <p>Sinta-se a vontade para escolhe mais.</p>

          <S.ButtonsArea>
            <S.ButtonContinue onClick={nextScene_continue} />
            <S.ButtonChooseMore />
          </S.ButtonsArea>
        </S.ModalContent>
      </S.Scene1>

      <S.Scene2 isOn={scene2}>
        <S.ModalContent>
          <S.Title>Quando ganhar, entraremos em contato com você!!</S.Title>
          <p>Para isso, preencha as informações abaixo e verifique, pois não há como alterar depois.</p>
        </S.ModalContent>
      </S.Scene2>

      </S.ModalBody>
    </S.Modal>
  )
}