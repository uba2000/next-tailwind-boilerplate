import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next Tailwind Boilerplate</title>
        <meta name="description" content="Generated using create-next-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center">
        Next Tailwind Boilerplate
      </h1>
    </>
  );
};

export default Home;
