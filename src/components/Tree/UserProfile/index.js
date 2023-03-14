import React from "react";
import { UserContext } from "../../../contexts";
const UserProfile = (props) => {
  // const {user:{id}} = props
  const showUser = (value) => {
    const{id,firstName,lastName} = value
    return (
      <article>
        <h3>
          {firstName} {lastName} id:{id}
        </h3>
      </article>
    );
  };
  return <UserContext.Consumer>{showUser}</UserContext.Consumer>;
};

export default UserProfile;
