"use client";
import React, { useRef, useEffect, useState } from 'react';import styles from "../Skills.module.css";
import SkillsBlock from './SkillsBlock';
import 'animate.css/animate.min.css';
import VisibilitySensor from 'react-visibility-sensor';


const frontEndImages = [
    'htmlcssjs-logo.png',
    'reactjs.jpg',
    'next.svg',
    'vuejs-logo.png',
];

const backEndImages = [
    'nodejs.jpg',
    'express-logo.png',
    'symfony2.png',
    'PHP-logo.svg.png'
];

const designImages = [
    'adobe-photoshop.jpg',
    'figma-logo.png',
    'marvel-logo.jpg',
];

const others = [
    {
        title: "Systèmes d’exploitation",
        skills: "Windows, MAC OS, Linux",
    },
    {
        title: "Workflow",
        skills: "Git, XAMP/MAMP, NPM, Yarn, CLI",
    },
    {
        title: "IDE",
        skills: "Visual Studio Code, PhpStorm"
    },
    {
        title: "CRM",
        skills: "Strapi, Wordpress"
    }, 
    {
        title: "Compétences linguistiques",
        skills: "Anglais (C2), Espagnol (C1)",
    },
    {
        title: "Soft skills",
        skills: "capacité d’adaptation, organisation, rigueur, travail en équipe, autonomie, patience, créativité, gestion du temps, communication, motivation",
    }
]

export default function Skills() {

    const [hasAnimated, setHasAnimated] = useState(false); // Utilise un état pour suivre si l'animation a déjà été déclenchée

    const onVisibilityChange = (isVisible) => {
        if (isVisible && !hasAnimated) { // Vérifie si l'élément est visible et que l'animation n'a pas déjà été déclenchée
            setTimeout(() => {

                setHasAnimated(true); // Définir l'état hasAnimated à true pour indiquer que l'animation a été déclenchée
            }, 500)
        }
    };
    
    return (
    <div className={styles.main}>
        <div className={styles.titlebox}>
            <h2 className={styles.title}>Compétences</h2>
            <hr className={styles.hr}></hr>
        </div>
        <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
            <div className={hasAnimated ? 'animate__animated animate__bounceInLeft' : ''}>

                <div className={styles.contentBlocks}>
                
                    <div className={styles.skillTitlebox}>
                        <SkillsBlock images={frontEndImages} />
                        <h3 className={styles.h3}>FRONT</h3>
                    </div>
                        
                    
                        
                    <div className={styles.secondSkillTitlebox}>
                        <h3 className={styles.secondh3}>BACK</h3>
                        <SkillsBlock images={backEndImages} />
                    </div>
                    

                    <div className={styles.skillTitlebox}>
                        <SkillsBlock images={designImages} />
                        <h3 className={styles.h3}>DESIGN</h3>
                    </div>
                    <div className={styles.otherSkillTitleBox}>
                        <h3 className={styles.secondh3}>AUTRES</h3>
                        <div className={styles.otherSkillsBlock} >
                        {others.map((item, index) => (
                            <div className={styles.text} key={index}>
                                <h4>{item.title} :</h4>
                                <p>{item.skills}</p>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>

        </VisibilitySensor>


    </div>
    );
}

