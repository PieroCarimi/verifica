import React, { useContext } from 'react';
import { AppContext } from '../ContextProvider'; 

export const PostsList: React.FC = () => {
  const { posts, selectedPosts, checkedList, removePost }: any = useContext(AppContext);

  return (
    <ul>
      {posts.map((post:any) => (
        <li key={post.id}>
          <button onClick={()=>removePost(post.id)}>x</button>
          <input 
            type="checkbox" 
            checked={selectedPosts.some((selectedPost: { id: number; }) => selectedPost.id === post.id)} 
            onChange={() => checkedList(post.id)}
             />
          <span>{post.title}</span>
        </li>
      ))}
    </ul>
  );
};