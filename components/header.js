import styles from '../styles/header.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.leftContainer}>
                <h1 className={styles.name}>Richard Dahl</h1>
            </div>
            <div className={styles.rightContainer}>
                <a
                    href="https://www.linkedin.com/in/dahl-richard/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src="/linkedin-logo.png"
                        alt="LinkedIn"
                        width={41}
                        height={41}
                        className={styles.linkedinLogo}
                    />
                </a>
            </div>
        </header>
    );
}