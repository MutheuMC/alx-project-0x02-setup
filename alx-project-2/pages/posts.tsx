import React, { useState ,  useEffect} from 'react'
import Header from '@/components/layout/Header'
import { PostData } from '@/interfaces'
import PostCard from '@/components/common/PostCard';

const posts = () => {
  const [posts, setPosts] =useState<PostData[]>([]);
      // Fetch users from the API
      useEffect(() => {
        const fetchPosts = async () => {
          try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json()
            console.log(data)
            setPosts(data);
          } catch (error) {
            console.error("Error fetching user data:", error);
          }
        };
    
        fetchPosts();
      }, []);
  


  return (
    <div className="p-4">
    <h1 className="text-2xl font-bold text-center mb-4">Posts</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          userId={post.id}
          title={post.title}
          content={post.body}
        />
      ))}
    </div>
  </div>
  )
}

export default posts