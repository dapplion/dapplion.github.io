import React from "react";
import front from "img/front.png";
import style from "./headline.module.scss";

export function Headline() {
  return (
    <div className={style.headline}>
      <div className={style.titlesSection}>
        <div className={style.titlesContainer}>
          <div className={style.title}>
            Hi,
            <br />
            I'm dapplion
          </div>
          <div className={style.subtitle}>
            ..
          </div>

          <div className={style.blurShape} />
        </div>
      </div>

      <div className={style.imgSection}>
        <div className={style.backgroundTexture} />
        <div className={style.backgroundColor} />
        <div className={style.imgContainer}>
          <img src={front} alt="front" />
        </div>
      </div>
    </div>
  );
}
