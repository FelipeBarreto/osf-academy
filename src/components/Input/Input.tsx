import React from "react";
import * as S from "./Input.styles";

type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
};

const Input: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <>
      {label && <S.Label>{label}:</S.Label>}
      <S.Input {...props} />
    </>
  );
};

export default Input;
