import React from 'react';
import Header from '@/components/layout/Header';
import { UserData } from '@/interfaces';
import UserCard from '@/components/common/UserCard';

interface UsersPageProps {
  users: UserData[];
}

const Users = ({ users }: UsersPageProps) => {
  return (
    <div className="p-4">
      <Header />
      <h1 className="text-2xl font-bold text-center mb-4">Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            email={user.email}
            address={`${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}
          />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    return {
      props: { users },
    };
  } catch (error) {
    console.error('Error fetching users:', error);
    return { props: { users: [] } }; // Return empty array on error
  }
};

export default Users;
