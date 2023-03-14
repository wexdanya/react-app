import React from "react";
import PropTypes from "prop-types";
import styles from "./ControlAmount.module.scss";

const ControlAmount = (props) => {
  const { amounts, changeAmount, load , curentSeed} = props;
  const makeChange = (e) => {
    console.log(Number(e.target.id));
    return changeAmount(Number(e.target.id)), setTimeout(() => load(), 10);
  };
  const rendAmounts = (e) => {
    return (
      <>
        {e === curentSeed ? (
          <input
            type="radio"
            key={e}
            id={e}
            name="choseAmount"
            onClick={makeChange}
            defaultChecked
          />
        ) : (
          <input
            type="radio"
            key={e}
            id={e}
            name="choseAmount"
            onClick={makeChange}
          />
        )}
        <label key={e + 100}>{e}</label>
      </>
    );
  };
  return <div className={styles.controlAmount}>{amounts.map(rendAmounts)}</div>;
};

ControlAmount.propTypes = {};

export default ControlAmount;
