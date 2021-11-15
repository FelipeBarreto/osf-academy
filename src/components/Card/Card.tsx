import * as S from "./Card.styles";

const Card: React.FC = ({ children, ...props }) => {
  return <S.Card {...props}>{children}</S.Card>;
};

export default Card;
