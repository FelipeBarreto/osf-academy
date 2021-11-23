import * as S from "./Modal.styles";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
};

const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  title,
  children,
  ...props
}) => {
  if (!open) {
    return null;
  }

  return (
    <S.Backdrop onClick={onClose}>
      <S.Modal onClick={(e) => e.stopPropagation()} {...props}>
        <S.ModalTitle>
          {title}
          <span onClick={onClose}>x</span>
        </S.ModalTitle>
        {children}
      </S.Modal>
    </S.Backdrop>
  );
};

export default Modal;
