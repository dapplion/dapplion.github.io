import React from "react";
import { Header } from "components/Header";
import { Headline } from "sections/Headline";
import { RecentWork } from "sections/RecentWork";
import { SayHi } from "sections/SayHi";
import { Footer } from "components/Footer";
import style from "./app.module.scss";

function App() {
  return (
    <div className={style.app}>
      <Header />
      <div className={style.sections}>
        <Headline />
        <RecentWork />
        <SayHi />
      </div>
      <Footer />
    </div>
  );
}

export default App;
