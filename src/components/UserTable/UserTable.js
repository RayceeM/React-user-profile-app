export function UserTable({ users }) {
  return (
    <table>
      <tbody>
        <tr>
          <th> Name </th>
          <th> Email</th>
          <th> Registration date </th>
        </tr>
        {users.map((user) => (
          <tr key={user.id} className="User">
            <td className="Username"> {user.username} </td>
            <td>{user.email}</td>
            <td id="CreatedAt"> {user.created_at} </td>
          </tr>
        ))}
        <button> show more </button>
      </tbody>
    </table>
  );
}
