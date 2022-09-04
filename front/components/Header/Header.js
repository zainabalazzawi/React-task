import Head from "next/head";

import Navigation from "../Navigation/Navigation";

const Header = ({ title }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="stylesheet" href="styles.css" />
      </Head>
      <div>{title}</div>
      <Navigation />
    </div>
  );
};

export default Header;
