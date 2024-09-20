import React, { useState } from 'react';
import styles from '../styles/leadership.module.css';
import Image from 'next/image';

const leadershipContent = [
    {
        image: '/be-better.png',
        title: 'Be Better',
        subtitle: 'Continuous Improvement',
        content: 'I’ve recently been contemplating what makes a good leader and have distilled some of my thoughts into a list of “My Be’s of Leadership”. Here’s the first.\n\nBe Better: Continuous Learning and Improvement\n\nLeadership isn\'t about being perfect; it\'s about continuously striving to be better, for yourself and for your team. As Albert Einstein said, \'The measure of intelligence is the ability to change.\' Create a culture of continuous learning and improvement, where every challenge becomes an opportunity for growth and positive change.\n\nAs a leader, it\'s crucial to cultivate an environment where continuous learning and improvement are fundamental expectations. While the responsibility for learning and growth lies with the individual, empowering them to take ownership of their development journey and providing opportunity for growth is a hallmark of a good leader.\n\nEngage with your team members about their learning journeys. Encourage open dialogue about what they are learning and find ways for individual growth and learning to spread wider to teams and departments fostering a dynamic environment of innovation and skill development.'
    },
    {
        image: '/be-balanced.png',
        title: 'Be Balanced',
        subtitle: 'Balancing Psychological Safety and Accountability',
        content: 'A great leader strikes a delicate balance between psychological safety and accountability. As Simon Sinek puts it, \'Leadership is not about being in charge. It\'s about taking care of those in your charge.\' Foster an environment where team members feel safe to take risks while also being held accountable for their actions, creating a culture of trust and responsibility.\n\nI have experienced contrasting organizational cultures firsthand. In environments characterized by command and control, trust is absent, and fear stifles innovation. On the other end of the spectrum, I have encountered cultures where the non-punitive aspects of a psychologically safe environment transition to no accountability leaving teams to tolerate and work around individuals who choose to do little work, produce work of poor quality, or no work at all, resulting in stifled innovation and a sinking team morale.\n\nAchieving a balance between psychological safety and accountability is essential. When these elements are effectively coupled you will have trust, collaboration, innovation, and individual well-being leading to higher employee engagement, creativity, and productivity.'
    },
    {
        image: '/be-a-chameleon.png',
        title: 'Be a Chameleon',
        subtitle: 'Idealistic Leadership vs. Pragmatic Leadership',
        content: 'When I say Chameleon, I’m not suggesting as a leader that you should try to blend in and hide. That’s not the lesson we can learn from the Chameleon. I’m suggesting that you need to learn to adapt, and to adapt quickly. Adapt your leadership in the moment to the current situation.\n\nAs a leader you need to bring out the appropriate dimensions of leadership for the work at hand. Leadership is not one size fits all, and without intent you can end up bringing your comfortable tools to every situation and end up applying a square peg to a round hole.\n\nIn my role as an engineering leader, I have the pleasure of working with two fantastic teams: my vertical team and my horizontal team. My vertical team is where the rubber meets the road. This crew of engineers and leaders are the builders, the doers, the ones turning vision into reality. Here, pragmatic leadership is key. We\'re focused on the journey from where we are to where we need to be, solving problems with data-driven decisions and clear, direct communication. We thrive on practicality and results, ensuring our strategies are not only feasible but also executed flawlessly.\n\nOn the flip side, my horizontal team is where we dream big. This group consists of my peers in product management, support, training, sales, marketing, and other operational groups. We collaborate on the vision of our product. Together, we set bold goals and chase daring initiatives. Here, I switch to idealistic leadership, where creativity and long-term vision take the front seat. We brainstorm and innovate, painting a picture of where we want to go with our products.\n\nWhile this analogy of my vertical and horizontal teams is stated in binary, suggesting that I bring one set of skills to each team, the reality is working with my teams is nuanced, situational, and requires a blend of these leadership styles. A good leader knows how to recognize the environment and adapt depending on the team and the topic at hand. You can’t simply be one type of leader all the time. Balancing the attributes of pragmatic and idealistic leadership is essential.'
    },
    {
        image: '/be-trusting-and-trusted.png',
        title: 'Be Trusting and Trusted',
        subtitle: 'Critical Components of a Happy Team',
        content: 'A recent Watson Wyatt study shows that companies with high employee trust levels outperform those with low trust levels by 186%.\n\nBi-directional trust is essential for a successful organization. In my daily work, this means trusting my team members to do the right things in the right way at the right time. If you have this trust, you are fortunate; if you don\'t, you need to cultivate it. It also means that I need to operate in a way that builds and maintains trust.\n\nBuilding and maintaining this culture of trust requires focused effort on:\n\n·      Accountability\n·      Consistency\n·      Reliability\n·      Transparency\n·      Honesty\n·      Open Communication\n·      Empathy\n·      Understanding\n·      Respect\n\nThese actions establish the foundation for a bi-directional trust-based culture.\n\nBi-directional trust in the workplace brings substantial benefits, fostering a healthier and more productive environment. When leaders trust their employees, it empowers them to take ownership of their tasks and make critical decisions, leading to higher engagement, improved performance, and greater innovation.\n\nEmployees who feel trusted are more likely to be satisfied with their jobs and remain loyal to the company. And, when employees trust their leaders, it creates a collaborative atmosphere where open communication and mutual respect thrive. This reciprocal trust enhances team bonds, reduces stress, and promotes a culture of accountability and transparency, ultimately driving the organization toward greater success.'
    },
    {
        image: '/be-in-the-details.png',
        title: 'Be in the Details',
        subtitle: 'Avoid the Extremes of Blind Trust and Micromanagement',
        content: 'We touched on bi-directional trust in my last post and how it’s an essential part of a healthy team dynamic. This week my thoughts will extend that conversation into the need to be in the details of what your team is doing. As a leader you need to be informed while letting your team do what they do best. It’s essential to do this in a way that doesn’t erode the trust culture you have.\n\nLydell Stokes said it well in his article, "The Importance of Trust in the Workplace":\n\n“At the core of it, your employees know their roles best. That’s why they are employed in the professional role they have. Rather than dismissing their expertise, it’s the role of a leader to get in the trenches with them, understand the issues and trust the team to come up with a collaborative solution. Leaders can’t have collaboration and complete control.”\n\nComplete control or micromanaging kills collaboration, morale, and innovation, resulting in disengaged, unhappy team members. On the flip side, blind trust introduces risk, as Warren Buffett reminds us, "Risk comes from not knowing what you\'re doing."\n\nAs a leader, it\'s critical to avoid the extremes of blind trust and complete control. Delve into the details, gather firsthand information, and make collaborative, informed, data-driven decisions with your team. By eliminating emotion and promoting pragmatic conversations, you pave the way for informed choices and effective outcomes. This ensures your team members can fulfill their roles with satisfaction while you mitigate risk.'
    },
];

const Leadership = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % leadershipContent.length);
    };

    const handlePrevious = () => {
        setCurrentIndex(
            (prevIndex) =>
                (prevIndex - 1 + leadershipContent.length) % leadershipContent.length
        );
    };

    const getDisplayedItems = () => {
        const items = [];
        for (let i = -2; i <= 2; i++) {
            items.push(
                leadershipContent[
                (currentIndex + i + leadershipContent.length) %
                leadershipContent.length
                    ]
            );
        }
        return items;
    };

    return (
        <div className={styles.leadershipContainer}>
            <button className={styles.arrowLeft} onClick={handlePrevious}>
                ◄
            </button>
            <div className={styles.carousel}>
                {getDisplayedItems().map((item, index) => {
                    const isCenter = index === 2; // The center item is at index 2
                    return (
                        <div
                            key={index}
                            className={`${styles.carouselItem} ${isCenter ? styles.centerItem : ''}`}
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={isCenter ? 450 : 300} // Make the center image larger
                                height={isCenter ? 300 : 200}
                                className={styles.carouselImage}
                            />
                            <h2 className={styles.title}>{item.title}</h2>
                            <h3 className={styles.subtitle}>{item.subtitle}</h3>
                            <div className={styles.content}>
                                {item.content.split('\n\n').map((paragraph, idx) => (
                                    <p key={idx}>{paragraph}</p>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
            <button className={styles.arrowRight} onClick={handleNext}>
                ►
            </button>
        </div>
    );
};

export default Leadership;