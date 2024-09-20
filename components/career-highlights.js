import React from 'react';
import styles from '../styles/career-highlights.module.css';
import Link from 'next/link';

const CareerHighlights = () => {
    return (
        <div className={styles.careerHighlightsContainer}>
            <h1 className={styles.careerTitle}>CAREER HIGHLIGHTS</h1>
            <p>
                <Link href="https://www.linkedin.com/in/dahl-richard/" passHref legacyBehavior>
                    <a className={styles.workExperienceLink} target="_blank" rel="noopener noreferrer">
                        View my full work experience here
                    </a>
                </Link>
            </p>
            <div className={styles.highlightsList}>
                <div className={styles.highlight}>
                    <h2 className={styles.highlightTitle}>CHANGE LEADERSHIP</h2>
                    <p className={styles.highlightText}>
                        Repeatedly selected by executives to spearhead large-scale transformative changes within product
                        and engineering departments. Successfully optimized processes, fostered transparent
                        collaboration, and achieved critical business outcomes.
                    </p>
                </div>
                <div className={styles.highlight}>
                    <h2 className={styles.highlightTitle}>MENTORSHIP</h2>
                    <p className={styles.highlightText}>
                        Demonstrated ability to coach, mentor, and build exceptional teams. I derive immense satisfaction
                        from helping team members maximize ROI, elevate job satisfaction, and lay the foundation for
                        thriving careers.{' '}
                        <Link href="https://www.linkedin.com/in/dahl-richard/details/recommendations/?detailScreenTabIndex=0" passHref legacyBehavior>
                            <a className={styles.testimonialsLink} target="_blank" rel="noopener noreferrer">
                                Read testimonials from Jim, Jordan, and Joel here
                            </a>
                        </Link>
                        .
                    </p>
                </div>
                <div className={styles.highlight}>
                    <h2 className={styles.highlightTitle}>INNOVATION LEADERSHIP</h2>
                    <p className={styles.highlightText}>
                        Rescued at-risk monolith systems and services responsible for critical revenue streams resulting
                        in seamless customer transition to new SOA based microservices with RESTful APIs securing stable,
                        scalable growth for the next decade.
                    </p>
                </div>
                <div className={styles.highlight}>
                    <h2 className={styles.highlightTitle}>CULTURE BUILDING</h2>
                    <p className={styles.highlightText}>
                        Expert in building psychologically safe, highly accountable culture focusing on continuous
                        improvement resulting in happy teams and happy customers.
                    </p>
                </div>
                <div className={styles.highlight}>
                    <h2 className={styles.highlightTitle}>REVENUE GROWTH</h2>
                    <p className={styles.highlightText}>
                        Achieved consistent, year-over-year profit and revenue growth for products in my portfolio.
                        Through collaboration, innovation, and continuous improvement, I enhanced existing revenue
                        streams and identified and created new ones.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CareerHighlights;