import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { idRecentWork } from "params";
import { Title } from "components/Section";
import style from "./recentWork.module.scss";
import { recentWorkItems } from "data";
import { newTabProps } from "utils";

export function RecentWork() {
  return (
    <div className={style.recentWork} id={idRecentWork}>
      <Title
        title="My recent work"
        subtitle="Projects I've contributed directly or created"
      />

      <div className={style.cards}>
        {recentWorkItems.map(({ title, body, img, url }) => (
          <div key={title} className={style.card}>
            <div className={style.logo}>
              <img src={img} alt="logo" />
            </div>

            <div className={style.body}>{body}</div>

            <a className={style.url} href={url} {...newTabProps} title={title}>
              <span>Learn more</span>
              <AiOutlineRight />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
