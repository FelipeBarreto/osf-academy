import * as S from "./Header.styles";
import Logo from "assets/images/logo.png";
import { ResponsiveContainer } from "components/ui";

const Header = () => {
  return (
    <S.Header>
      <ResponsiveContainer>
        <img src={Logo} alt="logo" width="212" height="50" />
      </ResponsiveContainer>
    </S.Header>
  );
};

export default Header;
