import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";

const Home = () => {
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (post: { title: string; content: string }) => {
    setPosts((prevPosts) => [...prevPosts, post]);
  };

  return (
    <div>
      <Header />
      <h1>Welcome to the Next.js TypeScript Project</h1>
      <button onClick={() => setIsModalOpen(true)}>Add New Post</button>
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddPost}
      />
      <div>
        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}
      </div>
    </div>
  );
};

export default Home;
