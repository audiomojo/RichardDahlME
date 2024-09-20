import React from 'react';
import styles from '../styles/footer.module.css';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <h1 className={styles.footerTitle}>RICHARD DAHL</h1>
            <p className={styles.footerEmail}>richarddahl1216@gmail.com</p>
            <div className={styles.footerImage}>
                <a href="https://www.linkedin.com/in/dahl-richard/" target="_blank" rel="noopener noreferrer">
                    <Image src="/linkedin-logo.png" alt="LinkedIn" width={50} height={50} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;