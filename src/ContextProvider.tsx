import React, { createContext, useContext, useEffect, useState } from 'react';
import { Posts } from './declarations';
import { fetchPosts } from './pages/api/posts';

type PostsContextType = {
  posts: Posts[];
  setPosts: React.Dispatch<React.SetStateAction<Posts[]>>;
};

interface Props {
  children: React.ReactNode;
}

export const AppContext = createContext<PostsContextType | undefined>(undefined);

export const PostsProvider: React.FC<Props> = ({ children }: Props) => {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [checked, setChecked] = useState<Posts[]>([]);


  useEffect(() => {
    if (posts.length === 0) {
      const getPosts = async () => {
        const postsData = await fetchPosts();
        setPosts(postsData);
      };

      getPosts();
    }
  }, [posts]);

  return (
    <AppContext.Provider value={{ posts, setPosts }}>
      {children}
    </AppContext.Provider>
  );
};
