import React from "react";
import Download from "./Download";
import Express from "./Express";
import Faq from "./Faq";
import General from "./General";
import Info from "./Info";
import Region from "./Region";
import Upload from "./Upload";

function Header() {
  return (
    <main className="main">
      <General />
      <Download />
      <Info />
      <Express />
      <Region />
      <Faq />
    </main>
  );
}

export default Header;
