import React from "react";
import style from "./fallingText.module.scss";

export function FallingText({ text }: { text: string }) {
  return (
    <div className={style.fallingText}>
      <div>{text}</div>
      <div>{text}</div>
      <div>{text}</div>
    </div>
  );
}
