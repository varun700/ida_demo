import React, { useEffect } from "react";
import MainApp from "./containers/MainApp";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./AppRedux/slice/userslice";
const App = () => {
  // const user = useSelector((state) => state.user);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, []);
  return (
    <>
      {/* {user.loading && <div>Loading...</div>}
      {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
      {!user.loading && user.users.length ? (
        <ul>
          {user.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : null} */}
      <MainApp />
    </>
  );
};

export default App;
