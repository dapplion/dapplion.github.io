import React from "react";
import { idSayHi, idRecentWork } from "params";
import logo from "img/logo.svg";
import styles from "./header.module.scss";

const navItems: { text: string; url: string }[] = [
  { text: "About", url: `#${idRecentWork}` },
  { text: "Say hi", url: `#${idSayHi}` },
];

export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href=".#">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className={styles.nav}>
          {navItems.map(({ text, url }) => (
            <a key={text} href={url}>
              {text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
