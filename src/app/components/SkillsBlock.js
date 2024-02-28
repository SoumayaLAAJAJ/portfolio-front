import React from 'react';
import styles from "../Skills.module.css";

export default function SkillsBlock({ images }) {
    return (
    <div>
        <div className={styles.skillsBlock}>
            {images.map((imageUrl, index) => (
            <div key={index}>
                <img className={styles.img} src={imageUrl} alt={`Image ${index + 1}`} />
            </div>
            ))}
        </div>
    </div>
    );
}

