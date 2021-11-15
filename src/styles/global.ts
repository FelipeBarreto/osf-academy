import styled from "styled-components/macro";

export const ResponsiveContainer = styled.div({
  padding: "0 20px",
  maxWidth: "1200px",
  margin: "auto",
});

export const FlexContainer = styled.div<{
  gap?: string;
  justifyContent?: string;
}>(({ gap, justifyContent }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap,
  justifyContent,
}));

export const EmptySlot = styled.div<{ padding?: string }>(({ padding }) => ({
  flexGrow: 1,
  flexBasis: "1px",
  padding,
}));
