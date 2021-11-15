import styled from "styled-components/macro";

export const Header = styled.header(({ theme: { colors, breakpoints } }) => ({
  backgroundColor: colors.gray,
  padding: "10px 0",
}));
