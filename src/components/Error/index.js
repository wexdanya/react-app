import React from 'react';
import erImg from"./error_image.gif"
import styles from './Error.module.scss'

const Error = () => {
    return (
        <div className={styles.error_div}>
            <img src={erImg} alt="error"/>
        </div>
    );
}

export default Error;
