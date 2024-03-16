import React from 'react';
import Head from 'next/head';
import { PostsList } from '../components/PostsList';
import { useRouter } from 'next/router';

const Home: React.FC = () => {
  const router = useRouter();

  const goToCheckedList = () => {
    router.push('/checkedList');
  };
  return (
      <div>
        <Head>
          <title>Posts List</title>
          <meta name="description" content="Posts List App" />
        </Head>
        <nav>
          <button onClick={goToCheckedList}>Checked</button>
        </nav>
        <main>
          <h1>Posts List</h1>
          <PostsList />
        </main>
      </div>
  )
};

export default Home;
