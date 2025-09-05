import React from 'react';
import type { User } from '../interfaces/reqres.response';

interface UserRowProps {
  user: User
}

export const UserRow: React.FC<UserRowProps> = ({ user }) => {
  return (
    <tr className="p-2">
      <td>
        <img src={user.avatar} className="p-2 rounded-full w-14" alt="User avatar" />
      </td>
      <td>
        {user.first_name} {user.last_name}
      </td>
      <td>{user.email}</td>
    </tr>
  );
};
