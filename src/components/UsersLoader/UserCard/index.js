import React from "react";
import styles from "./UserCard.module.scss";

const UserCard = (props) => {
  const {
    user: {
      email,
      name: { first, last },
      location: { country },
      picture: { large },
    },
  } = props;
  return (
    <article className={styles.userCard}>
      <img src={large} alt="cardimage" />
      <div className={styles.userCard__title}>
        <h3>
          {first} {last}
        </h3>
        <span>{country}</span>
      </div>
      <p>Email : {email}</p>
    </article>
  );
};


export default UserCard;
