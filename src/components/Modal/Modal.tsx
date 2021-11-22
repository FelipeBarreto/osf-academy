import * as S from "./Modal.styles";

type ModalProps = {
  open: boolean;
  title?: string;
};

const Modal: React.FC<ModalProps> = ({ open, title, children, ...props }) => {
  if (!open) {
    return null;
  }

  return (
    <S.Backdrop>
      <S.Modal {...props}>
        <S.ModalTitle>{title}</S.ModalTitle>
        {children}
      </S.Modal>
    </S.Backdrop>
  );
};

export default Modal;
