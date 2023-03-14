import { PropTypes } from "prop-types";
import styles from "./UsersList.module.scss"
import UserCard from './../UserCard/index';
const UsersList = (props) => {
  const mapUsers = (user) => <UserCard key={user.login.uuid}user={user}/>;
  const { users } = props;
  return (
    <>
      <ul className={styles.usersList}>{users.map(mapUsers)}</ul>
    </>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default UsersList;
