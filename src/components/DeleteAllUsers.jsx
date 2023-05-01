import React from "react";
import Button from "react-bootstrap/esm/Button";
import { clearAllUsers } from "../store/UserSlice";
import { useDispatch, useSelector } from "react-redux";

const DeleteAllUsers = ({}) => {
  const dispatch = useDispatch();

  const removeAllUser = () => {
    dispatch(clearAllUsers())
  };
  return (
    <div className="deleteUsers">
      <Button variant="danger" className="m-2" onClick={() => removeAllUser()}>
        Delete
      </Button>
    </div>
  );
};

export default DeleteAllUsers;
