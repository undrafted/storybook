import * as React from "react";
import "./Button.css";

export interface Props {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

const noop = () => {};

export const Button = (props: Props) => {
  const { children, onClick, disabled = false } = props;
  const disabledClass = disabled ? "button--disabled" : "";

  return (
    <button
      className={`button ${disabledClass}`}
      onClick={!disabled ? onClick : noop}
    >
      {children}
    </button>
  );
};
