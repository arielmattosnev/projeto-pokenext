import Head from "next/head";

import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>PokéNext</title>
        <link rel="shortcut icon" href="/pokeball.ico" />
      </Head>
      <Navbar />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
