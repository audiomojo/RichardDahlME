import React from 'react';
import styles from '../styles/title.module.css';

const Title = ({ text, subtitle }) => {
    return (
        <div className={styles.titleContainer}>
            <h1 className={styles.title}>{text}</h1>
            <p className={styles.subtitle}>{subtitle}</p>
        </div>
    );
};

export default Title;