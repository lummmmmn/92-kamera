// pages/index.js
import React from 'react';
import Head from 'next/head';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800">
      <Head>
        <title>Camera Rental App</title>
      </Head>
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white">Welcome to the Camera Rental App</h1>
    </div>
  );
};

export default Home;
