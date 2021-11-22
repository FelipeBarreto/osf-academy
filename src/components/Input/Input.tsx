import React from "react";
import * as S from "./Input.styles";

type InputProps = {
  label?: string;
};

const Input: React.FC<InputProps> = ({ label }) => {
  return (
    <>
      {label && <S.Label>{label}:</S.Label>}
      <S.Input />
    </>
  );
};

export default Input;
