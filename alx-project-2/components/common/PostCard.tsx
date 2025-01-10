import { PostProps } from '@/interfaces'
import React from 'react'


const PostCard: React.FC<PostProps> = ({title, content, userId}) => {
  return (
    <div className="border p-4 rounded-md shadow-lg">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-700">content: {content}</p>
      <p className="text-gray-700">userId: {userId}</p>
    </div>
  )
}

export default PostCard