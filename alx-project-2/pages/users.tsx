import { UserData } from '@/interfaces'
import React, { useState ,  useEffect} from 'react'
import UserCard from '@/components/common/UserCard';

const users = () => {
    const [users, setUsers] = useState<UserData[]>([]);
  
    // Fetch users from the API
    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/users');
          const data = await response.json()
          console.log(data)
          setUsers(data);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };
  
      fetchUsers();
    }, []);
  
    return (
      <div className="p-4">
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
  
  export default users;