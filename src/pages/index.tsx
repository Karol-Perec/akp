import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>AKP Archiwizacja</title>
        <meta name="description" content="Usługi Archiwalne Krzysztof Perec" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Header</h1>

        <p>Stronka</p>
      </main>

      <footer>Footer</footer>
    </div>
  );
};

export default Home;
