import React from 'react';
import Head from 'next/head';
import ToleranceCalculator from '../components/ToleranceCalculator';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tolerance Stack-Up Calculator</title>
        <meta
          name="description"
          content="A calculator for tolerance stack-up analysis using Next.js, Material UI, and Recharts"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Tolerance Stack-Up Calculator</h1>
        <ToleranceCalculator />
      </main>
    </div>
  );
}
