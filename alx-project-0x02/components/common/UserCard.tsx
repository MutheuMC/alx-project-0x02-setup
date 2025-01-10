import React from 'react';
import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border p-4 rounded-md shadow-lg">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-700">Email: {email}</p>
      <p className="text-gray-700">Address: {address}</p>
    </div>
  );
};

export default UserCard;
