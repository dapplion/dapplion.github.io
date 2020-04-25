import React from "react";
import { Title } from "components/Section";
import { idSayHi } from "params";
import style from "./sayHi.module.scss";
import { newTabProps } from "utils";
import { sayHiLink } from "data";

export function SayHi() {
  return (
    <div className={style.sayHi} id={idSayHi}>
      <Title
        title="Contact me"
        subtitle="I’m always open to new opportunities."
      />

      <a className={style.sayHiButton} href={sayHiLink} {...newTabProps}>
        Say hi
      </a>

      <div className={style.blurShape} />
    </div>
  );
}
