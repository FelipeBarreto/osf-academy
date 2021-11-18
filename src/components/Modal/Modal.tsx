import * as S from "./Modal.styles";

type ModalProps = {
  open: boolean;
};

const Modal: React.FC<ModalProps> = ({ open }) => {
  if (!open) {
    return null;
  }
  return <S.Modal>Modal</S.Modal>;
};

export default Modal;
