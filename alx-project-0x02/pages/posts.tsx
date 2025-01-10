import React from 'react';
import Header from '@/components/layout/Header';
import { PostData } from '@/interfaces';
import PostCard from '@/components/common/PostCard';

interface PostsPageProps {
  posts: PostData[];
}

const Posts = ({ posts }: PostsPageProps) => {
  return (
    <div className="p-4">
      <Header />
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
  );
};

export const getStaticProps = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();

    return {
      props: { posts },
    };
  } catch (error) {
    console.error('Error fetching posts:', error);
    return { props: { posts: [] } }; // Return empty array on error
  }
};

export default Posts;
