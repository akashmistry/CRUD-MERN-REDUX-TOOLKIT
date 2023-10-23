import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "./redux/userSlice";

function Users() {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:2620/deleteuser/" + id)
      .then((res) => {
        dispatch(deleteUser({ id }));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="w-1/2 p-3 border rounded-2xl border-green-400">
        <div className="flex justify-center">
          <Link to="/create" className="btn btn-success btn-sm mb-2 w-1/6">
            Add +
          </Link>
        </div>
        <table className="table ">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, id) => {
              return (
                <tr key={id} className="hover">
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>
                    <Link
                      to={`/edit/${user.id || user._id}`}
                      className="btn btn-sm btn-success me-2 "
                    >
                      Update
                    </Link>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="btn btn-sm btn-outline btn-error "
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
