import Head from "next/head";

import Navigation from "../Navigation/Navigation";

const Header = ({ title }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>

      <Navigation />
      <div className="text-4xl text-lime-900 ml-6 mt-6">{title}</div>
    </div>
  );
};

export default Header;
