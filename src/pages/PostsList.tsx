import React, { useContext } from 'react';
import { AppContext } from '../ContextProvider'; 

export const PostsList: React.FC = () => {
  const { posts, setPosts }: any = useContext(AppContext);

  const removePost = (postId: number) => {
    setPosts((prevPosts: any[]) => prevPosts.filter(post => post.id !== postId));
  };

  return (
    <ul>
      {posts.map((post:any) => (
        <li key={post.id}>
          <input type="checkbox" checked={post.completed} readOnly />
          <span>{post.title}</span>
          <button onClick={()=>removePost(post.id)}>x</button>
        </li>
      ))}
    </ul>
  );
};