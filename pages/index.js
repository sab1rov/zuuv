import Footer from "../layout/Footer.jsx";
import Head from "../layout/Head.js";
import Navbar from "../layout/Navbar.jsx";

import image from "../assets/Icons/head__logo.png";
import Main from "../layout/Header.jsx";

export default function Home() {
  return (
    <div className="wrapper">
      <Head title="ZUV" image={image} />
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}
