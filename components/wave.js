import React from 'react';
import styles from '../styles/wave.module.css';

const Wave = ({ topColor = '#2F6DAC', bottomColor = '#EAEAEE' }) => {
    const waveBackground = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 70 500 60' preserveAspectRatio='none'%3E%3Crect x='0' y='0' width='500' height='500' style='stroke: none; fill: ${encodeURIComponent(
        bottomColor
    )};' /%3E%3Cpath d='M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z' style='stroke: none; fill: ${encodeURIComponent(
        topColor
    )};'%3E%3C/path%3E%3C/svg%3E")`;

    return (
        <div className={styles.waveContainer}>
            <div
                style={{
                    backgroundImage: waveBackground,
                    height: '4rem',
                    width: '100vw',
                }}
            />
        </div>
    );
};

export default Wave;