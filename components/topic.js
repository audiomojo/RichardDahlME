import React from 'react';
import styles from '../styles/topic.module.css';

const Topic = ({ backgroundColor, imageSrc, title, titleColor, subtitle, content }) => {
    // Split the content string by '\n' and map it to separate <p> elements
    const paragraphs = content.split('\n').map((paragraph, index) => (
        <p key={index} className={styles.contentParagraph}>
            {paragraph}
        </p>
    ));

    return (
        <div className={styles.topicContainer} style={{ backgroundColor }}>
            <div className={styles.leftSection}>
                <img src={imageSrc} alt={title} className={styles.image} />
            </div>
            <div className={styles.rightSection}>
                <div className={styles.title} style={{ color: titleColor }}>
                    <h1>{title}</h1>
                </div>
                <div className={styles.subtitle}>
                    <h3>{subtitle}</h3>
                </div>
                <div className={styles.content}>
                    {paragraphs}
                </div>
            </div>
        </div>
    );
};

export default Topic;