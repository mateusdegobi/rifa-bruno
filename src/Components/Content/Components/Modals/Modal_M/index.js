import React, {useState} from "react";

import {Modal, ModalContent} from "./style";

export default function ModalM() {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <Modal size={[300, 800]} onClick={() => setIsOpened(true)} isOpened={isOpened}>
      <ModalContent>
        <p>dd</p>
      </ModalContent>
    </Modal>
  )
}