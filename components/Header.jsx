import React from "react";
import Download from "./Download";
import Express from "./Express";
import General from "./General";
import Info from "./Info";
import Upload from "./Upload";

function Header() {
  return (
    <main className="main">
      <General />
      <Download />
      <Info />
      <Express />
    </main>
  );
}

export default Header;
