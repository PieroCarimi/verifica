import React from 'react';
import Head from 'next/head';
import { PostsList } from './PostsList';

const Home: React.FC = () => {
  return (
      <div>
        <Head>
          <title>Posts List</title>
          <meta name="description" content="Posts List App" />
        </Head>
        <main>
          <h1>Posts List</h1>
          <PostsList />
        </main>
      </div>
  )
};

export default Home;
