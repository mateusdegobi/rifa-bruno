import React, {useState} from "react";

import * as S from "./style";

import FormOneNumber from '../../Forms/FormOneNumber';
import {ConfirmeButton} from '../../../../Others';
import sendFirebase from "../../../../../Functions/sendFirebase";

export default function ModalM({isOpened_modal, setIsOpened_modal, choosedNumber}) {
  const [scene1, setScene1] = useState(true);
  const [scene2One, setScene2One] = useState(false);
  const [scene2OnePay, setScene2OnePay] = useState(false);
  const [scene3, setScene3] = useState(false);

  const [buyer, setBuyer] = useState(null);
  const [phone1, setPhone1] = useState(null);
  const [phone2, setPhone2] = useState(null);

  const order = Math.floor(Math.random() * (999999999 - 90000000) + 90000000);
  
  function nextScene_continue() {
    setScene1(false);
    setScene2One(true);
    setScene2OnePay(false);
    setScene3(false);
  }

  function nextScene_continue_pay() {
    setScene1(false);
    setScene2One(false);
    setScene2OnePay(true);
    setScene3(false);
  }

  function nextScene_congratulations() {
    sendFirebase(choosedNumber, buyer, phone1, phone2, order);

    setScene1(false);
    setScene2One(false);
    setScene2OnePay(false);
    setScene3(true);
  }

  function resetConfig() {
    setScene1(true);
    setScene2One(false);
    setScene2OnePay(false);
    setScene3(false);
    setIsOpened_modal(false)
  }

  return (
    <S.Modal size={[300, 800]} isOpened={isOpened_modal}>
      <S.ModalBody>
        <S.ModalHeader>
          <S.CloseButton onClick={resetConfig} />
        </S.ModalHeader>

      <S.Scene isOn={scene1}>
        <S.ModalContent>
          <S.Title>Agora reserve seu número</S.Title>
          <p>Você escolheu o número <b>{choosedNumber}</b></p>
          <p>Sinta-se a vontade para escolhe mais.</p>

          <S.ButtonsArea>
            <S.ButtonContinue onClick={nextScene_continue} />
            <S.ButtonChooseMore />
          </S.ButtonsArea>
        </S.ModalContent>
      </S.Scene>






      <S.Scene isOn={scene2One}>
        <S.ModalContent>
          <S.Title>Quando ganhar, entraremos em contato com você!!</S.Title>
          <p>Para isso, preencha as informações abaixo e verifique, pois não há como alterar depois.</p>
          <FormOneNumber number={choosedNumber} setBuyer={setBuyer} setPhone1={setPhone1} setPhone2={setPhone2}/>
          <ConfirmeButton title="Garantir meu número" tintColor="green" onClick={nextScene_continue_pay} />
        </S.ModalContent>
      </S.Scene>

      <S.Scene isOn={scene2OnePay}>
        <S.ModalContent>
          <S.Title>Hora de confirmar seu número</S.Title>
          <h2>Ordem: {order}</h2>
          <p>Use o número da ordem na descrição do pagamento para te indentificarmos.</p>

          <p>Como formas de pagamento, aceitamos PIX ou transferências.</p>
          <p>Para PIX, basta escanear o código QR abaixo no app de seu banco de preferencia.</p>
          <p>Caso prefira fazer a transferência, siga os dados abaixo</p>
          <ul>
            <li>Instituição bancária: Banco do Brasil</li>
            <li>Nome: Lorem ipsum</li>
            <li>Tipo de conta: Corrente</li>
            <li>Agência: 00001</li>
            <li>Conta: 8000564-1</li>
          </ul>

          <ConfirmeButton title="Tudo certo!!" onClick={nextScene_congratulations} />
        </S.ModalContent>
      </S.Scene>

      <S.Scene isOn={scene3}>
        <S.ModalContent>
          <S.Title>Agora é esperar.</S.Title>
          <p>Ou escolher mais um númerozinho... A escolha é sua. 😆</p>
          <p>Marque em seu calendário a data <b>20/01/2030</b></p>

          <ConfirmeButton title="Até breve!!" tintColor="green" onClick={resetConfig} />
        </S.ModalContent>
      </S.Scene>

      </S.ModalBody>
    </S.Modal>
  )
}