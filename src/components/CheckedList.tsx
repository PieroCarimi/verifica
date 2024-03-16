import React, { useContext } from 'react';
import { AppContext } from '../ContextProvider'; 

export const CheckedList: React.FC = () => {
  const { selectedPosts, checkedList }: any = useContext(AppContext);

  return (
    <ul>
    {selectedPosts.map((post:any) => (
        <li key={post.id}>
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