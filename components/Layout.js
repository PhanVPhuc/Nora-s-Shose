import React from 'react';
import Head from 'next/head';

export default function Layout({ title, Children }) {
  return (
    <>
      <Head>
        <title> {title ? title + ' - Nora' : 'Nora Shoes'} </title>
        <meta name="description" content="Nora Shose Store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <header>header</header>

        <main>{Children} </main>

        <footer>footer</footer>
      </div>
    </>
  );
}
