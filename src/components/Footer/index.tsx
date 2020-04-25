import React from "react";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import logo from "img/logo.svg";
import style from "./footer.module.scss";
import { newTabProps } from "utils";
import { githubUrl, twitterUrl } from "data";

const socials = [
  { title: "Twitter", url: twitterUrl, Icon: AiFillTwitterCircle },
  { title: "Github", url: githubUrl, Icon: AiFillGithub },
];

export function Footer() {
  return (
    <div className={style.footer}>
      <img src={logo} alt="logo" />

      <div className={style.socials}>
        {socials.map(({ title, url, Icon }) => (
          <a href={url} {...newTabProps} title={title}>
            <Icon />
          </a>
        ))}
      </div>
    </div>
  );
}
