import * as React from "react";
import "./Button.css";

interface Props {
  /** button label */
  children: React.ReactNode;
  /** onClick handler */
  onClick: () => void;
  /** disables onClick
   * @default false
   * **/
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
