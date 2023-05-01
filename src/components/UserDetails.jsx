import React from "react";
import Button from "react-bootstrap/Button";
import DeleteAllUsers from "./DeleteAllUsers";
import { fakeUserData } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../store/UserSlice";
const UserDetails = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.users);
  const addNewUser = (name) => {
    dispatch(addUser(name));
  };

  const removeSingleUser = (item) => {
    alert(` Removing ${item }`)
    dispatch(removeUser(item));
    ;
  };
  return (
    <>
      <div className="content">
        <div className="admin-tabel">
          <div className="admin-subTitle">List of User Details</div>
          <Button
            variant="success"
            className="fw-bold fs-4"
            onClick={() => addNewUser(fakeUserData())}
          >
            Add New User
          </Button>
        </div>

        {userData.map((item, id) => {
          return (
            <div className="listDiv">
              <ul className="list" key={id}>
                <li>{item}</li>
              </ul>
              <Button className="m-2" onClick={() => removeSingleUser(item)}>
                Delete
              </Button>
            </div>
          );
        })}

        <hr />
        <DeleteAllUsers  />
      </div>
    </>
  );
};

export default UserDetails;
