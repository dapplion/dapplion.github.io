import React from "react";
import style from "./section.module.scss";

export const Title: React.FC<{
  title: string;
  subtitle?: string;
}> = ({ title, subtitle }) => {
  return (
    <div className={style.sectionTitle}>
      <div className={style.title}>{title}</div>
      {subtitle && <div className={style.subtitle}>{subtitle}</div>}
    </div>
  );
};
