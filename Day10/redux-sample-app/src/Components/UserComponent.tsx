import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../redux/store";
import { fetchUsers, addUser } from '../redux/userSlice'

const UserList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector((state: RootState) => state.users);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleAddUser = () => {
    if (name && email) {
      dispatch(addUser({ name, email }));
      setName("");
      setEmail("");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">User List</h2>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 mr-2"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 mr-2"
        />
        <button onClick={handleAddUser} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add User
        </button>
      </div>

      {loading && <p>Loading users...</p>}
      {error && <p>Error: {error}</p>}

      <ul className="list-disc pl-6">
        {data.map((user:any) => (
          <li key={user.id}>{user.name} ({user.email})</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
