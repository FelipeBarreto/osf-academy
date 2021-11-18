import styled from "styled-components/macro";

export const EmptySlot = styled.div<{ padding?: string }>(({ padding }) => ({
  flexGrow: 1,
  flexBasis: "1px",
  padding,
}));
