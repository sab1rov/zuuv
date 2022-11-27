import React from "react";
import Download from "../components/Download";
import Express from "../components/Express";
import Faq from "../components/Faq";
import General from "../components/General";
import Info from "../components/Info";
import Region from "../components/Region";

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
