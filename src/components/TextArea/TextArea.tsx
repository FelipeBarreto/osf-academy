import React from "react";
import * as S from "./TextArea.styles";

type TextAreaProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  label?: string;
};

const TextArea: React.FC<TextAreaProps> = ({ label, ...props }) => {
  return (
    <>
      {label && <S.Label>{label}:</S.Label>}
      <S.TextArea {...props} />
    </>
  );
};

export default TextArea;
