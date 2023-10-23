import axios from "axios";
import { useEffect, useState } from "react";
import { updateUser } from "./redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function UpdateUser() {
  const { id } = useParams();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();

  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    const user = users.find((u) => u.id === id);
    setName(user.name);
    setEmail(user.email);
    setAge(user.age);
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:2620/update/" + id, { name, email, age })
      .then((res) => {
        dispatch(updateUser({ id, name, email, age }));
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="w-1/4 h-1/2 p-3 border rounded-2xl border-green-400">
        <form
          onSubmit={handleUpdate}
          className="flex flex-col items-center px-0 py-5"
        >
          <h2 className="text-2xl mb-2">Update User</h2>
          <div className="mb-2 form-control w-full max-w-xs">
            <label htmlFor="" className="label label-text">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              className="input w-full max-w-xs border-green-400	"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="mb-2 form-control w-full max-w-xs">
            <label htmlFor="" className="label label-text">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              className="input w-full max-w-xs border-green-400"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="mb-2 form-control w-full max-w-xs">
            <label htmlFor="" className="label label-text">
              Age
            </label>
            <input
              type="text"
              placeholder="Enter Age"
              className="input w-full max-w-xs border-green-400"
              onChange={(e) => setAge(e.target.value)}
              value={age}
            />
          </div>
          <button className="btn btn-success mt-8">Update</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;
