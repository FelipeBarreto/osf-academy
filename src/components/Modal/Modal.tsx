import * as S from "./Modal.styles";

type ModalProps = {
  open: boolean;
  title?: string;
};

const Modal: React.FC<ModalProps> = ({ open, title, children }) => {
  if (!open) {
    return null;
  }

  return (
    <S.Backdrop>
      <S.Modal>
        <S.ModalTitle>{title}</S.ModalTitle>
        {children}
      </S.Modal>
    </S.Backdrop>
  );
};

export default Modal;
