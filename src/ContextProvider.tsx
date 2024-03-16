import React, { createContext, useContext, useEffect, useState } from 'react';
import { Posts } from './declarations';
import { fetchPosts } from './pages/api/posts';

type PostsContextType = {
  posts: Posts[];
  setPosts: React.Dispatch<React.SetStateAction<Posts[]>>;
  checkedList: (postId: number) => void;
  selectedPosts: Posts[];
  removePost: (postId: number) => void;
};

interface Props {
  children: React.ReactNode;
}

export const AppContext = createContext<PostsContextType | undefined>(undefined);

export const PostsProvider: React.FC<Props> = ({ children }: Props) => {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [selectedPosts, setSelectedPosts] = useState<Posts[]>([]);

  const checkedList = (postId: number) => {
    const postIndex = selectedPosts.findIndex(post => post.id === postId);
    if (postIndex !== -1){
      setSelectedPosts((prevSelectedPosts: any[]) => prevSelectedPosts.filter(post => post.id !== postId));
    } else {
      const postToAdd = posts.find(post => post.id ===postId);
      if (postToAdd){
        setSelectedPosts(prevSelectedPosts => [...prevSelectedPosts, postToAdd]);
      }
    }
  };

  const removePost = (postId: number) => {
    const postCheck = selectedPosts.find(post => post.id === postId);
    setPosts((prevPosts: any[]) => prevPosts.filter(post => post.id !== postId));
    if(!!postCheck){
      setSelectedPosts((prevSelectedPosts: any[]) => prevSelectedPosts.filter(post => post.id !== postId))
    }
  };

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
    <AppContext.Provider value={{ posts, setPosts, checkedList, selectedPosts, removePost }}>
      {children}
    </AppContext.Provider>
  );
};
