import React from 'react';
import styles from '../styles/welcome.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'; // Import useRouter from Next.js

const Welcome = () => {
    const router = useRouter(); // Initialize the router for navigation

    const navigateToLeadership = () => {
        router.push('/bes-of-leadership'); // Navigate to bes-of-leadership page
    };

    return (
        <>
            <div className={styles.welcomeContainer}>
                <div className={styles.textContainer}>
                    <h1>WELCOME! I’M RICHARD DAHL,</h1>
                    <ul>
                        <li>A software engineer of 27 years</li>
                        <li>A senior engineering leader of 12 years</li>
                        <li>A mentor that excels in building high-performing teams and skilled leaders</li>
                        <li>A culture creator adept in fostering a psychologically safe, highly accountable environment</li>
                        <li>A communicator & collaborator that understands leadership and teamwork</li>
                        <li>A career focused in B2B SaaS solutions for various industries</li>
                    </ul>
                    <p className={styles.learnMore}>
                        You can learn more about my leadership style{' '}
                        <Link href="/bes-of-leadership" legacyBehavior>
                            <a className={styles.learnMoreLink}>here</a>
                        </Link>.
                    </p>
                </div>
                <div className={styles.imageContainer}>
                    <Image src="/head-shot-2022.png" alt="Head Shot" width={400} height={600} />
                </div>
            </div>

            {/* Buttons Section */}
            <div className={styles.buttonsContainer}>
                <button
                    className={styles.button}
                    onClick={() => window.open('https://docs.google.com/document/d/1m8zZ07vuCJ9MHcz_C_pp5nmY5yAnY3qlVzZUzWc6Kwc/edit', '_blank')}
                >
                    RESUME
                </button>
                <button
                    className={styles.button}
                    onClick={navigateToLeadership} // Navigate to leadership page
                >
                    MY "BE'S OF LEADERSHIP"
                </button>
                <button
                    className={styles.button}
                    onClick={() => window.open('https://www.linkedin.com/in/dahl-richard/', '_blank')}
                >
                    LINKEDIN
                </button>
            </div>
        </>
    );
};

export default Welcome;