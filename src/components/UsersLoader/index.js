import React, { Component } from "react";
import styles from './UsersLoader.module.scss'
import UsersList from "./UsersList"
import Spinner from './../Spinner';
import Error from './../Error/index';
import Pagination from './../Pagination/index';
import { getRandomUsers } from './../../api/index';
import ControlAmount from "./ControlAmount";
class UserLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isPendeing: false,
      error: null,
      currentPage: 1,
      seed:10
    };
  }
  componentDidMount() {
    this.load()
  }
  changeAmount = (number) =>{
    this.setState({seed:number})
  }
  componentDidUpdate(prevProps,prevState) {
    if (this.state.currentPage !== prevState.currentPage) {
        this.load()
    }
  }
  handlePrev = () => {
    if (this.state.currentPage > 1) {
      this.setState((state) => ({ currentPage: state.currentPage - 1 }));
    }
  };Ё
  handleNext = () => {
    this.setState((state) => ({ currentPage: state.currentPage + 1 }));
  };

  load = () =>{
    const {currentPage,seed} = this.state
    this.setState({ isPendeing: true });
    getRandomUsers(seed,currentPage)
      .then((data) => this.setState({ users: data.results }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isPendeing: false }));
  }
  render() {
    const { users, isPendeing, error, currentPage } = this.state;
    if (isPendeing) {
      return <Spinner/>;
    }
    if (error) {
      return <Error />;
    }
    return (
      <section className={styles.userLoader}>
        <h2 className={styles.title} >Users list</h2>
        <ControlAmount amounts={[5,10,15]} changeAmount={this.changeAmount} load={this.load} curentSeed={this.state.seed}/>
        <Pagination handleNext={this.handleNext} handlePrev={this.handlePrev} currentPage={currentPage}/>
        <UsersList users={users}/>
      </section>
    );
  }
}


export default UserLoader;
