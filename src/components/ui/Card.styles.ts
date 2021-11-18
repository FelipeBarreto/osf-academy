import styled from "styled-components/macro";

export const Card = styled.div({
  padding: "12px",
  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",

  "&:hover": {
    boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
  },
});
