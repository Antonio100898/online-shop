import { useEffect } from "react";
import { UserType } from "../../../Api/Api";
import UserCard from "../../Users/UserCard";
import {Typography } from "antd"
import styles from "./Login.module.css";
import Preloader from "../../Preloader/Preloader";

const {Title} = Typography

const Login: React.FC<PropsType> = ({users, fetchAllUsers, isFetching}) => {
  
  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <div>
      <Title level={2}>To be able for login, first you are required to choose existing user</Title>
      <div className={styles.cards_wrapper}>
        {
        isFetching? <Preloader/> : users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};
type PropsType = {
  users: Array<UserType> | Array<any>;
  isFetching: boolean
  fetchAllUsers: () => void;
};
export default Login;
