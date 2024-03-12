"use client";
import React, { useState } from 'react';
import styles from "../Realisation.module.css";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';

const cards = [
    {
        img: 'unicaen-stud.png',
        title: 'Unicaen : Création et intégration de maquettes',
        languages: 'Langages utilisés',
        front: ['Twig', 'Html, CSS, Javascript'],
        back: ['Symfony'],
        buttonGit: false,
        buttonWebsite: true,
        urlWebsite: "https://unicaen.studapart.com/fr/"
    },
    {
        img: 'portfolio.png',
        title: "Portfolio : Création des maquettes et de la charte graphique + développement de l'application",
        languages: 'Langages utilisés',
        front: ['ReactJS', 'NextJS'],
        back: ['CMS Strapi'],
        buttonGit: true,
        buttonWebsite: true,
        urlWebsite: "https://unicaen.studapart.com/fr/"
    },
    {
        img: 'ia.png',
        title: " 🏗️ EN CONSTRUCTION / Instant Artistique : Création des maquettes et de la charte graphique + développement de l'application",
        languages: 'Langages utilisés',
        front: ['ReactJS', 'NextJS'],
        back: ['CMS Strapi'],
        buttonGit: false,
        buttonWebsite: true,
    },
    {
        img: 'ia.png',
        text: 'zertyui',
        buttonGit: true,
        buttonWebsite: false,
    },

];

export default function Realisation() {
    const [flippedIndex, setFlippedIndex] = useState(null);

    const handleCardClick = (index) => {
        if (flippedIndex === index) {
            setFlippedIndex(null); // Retourne à l'image frontale si déjà retournée
        } else {
            setFlippedIndex(index); // Retourne à l'image arrière si frontale
        }
    };

    return (
        <div className={styles.main}>
            <div className={styles.titlebox}>
                <h2 className={styles.title}>Réalisations</h2>
                <hr className={styles.hr}></hr>
            </div>
            <Box sx={{ width: '100%' }} className={styles.content}>
                <Grid container rowSpacing={12} className={styles.grid} columnSpacing={{ xs: 1, sm: 2, md: 8 }}>
            {cards.map((card, index) => (
                <Grid item key={index} xs={12} sm={12} md={6}>
                    <div className={`${styles.flipCard} ${flippedIndex === index ? styles.flipped : ''}`} onClick={() => handleCardClick(index)}>
                        <div className={styles.flipCardInner}>
                            <div className={styles.flipCardFront}>
                                <img className={styles.img} src={card.img} alt="Nom de l'image" />
                            </div>
                            <div className={styles.flipCardBack}>
                                <div className={styles.backContent}>
                                    <h4>{card.title}</h4>
                                    <h5>{card.languages}:</h5>
                                    <p>Front-End: {Array.isArray(card.front) ? card.front.join(', ') : ''}</p>
                                    <p>Back-End: {Array.isArray(card.back) ? card.back.join(', ') : ''}</p>
                                    <div className={styles.buttons}>
                                        <div>
                                        {card.buttonGit ? <Button className={styles.button} endIcon={<GitHubIcon/>} variant="outlined" size="small"> Voir le code</Button> : <></>}
                                        </div>
                                        <div>
                                        {card.buttonWebsite ? <Button className={styles.button} endIcon={<LinkIcon/>}  variant="outlined" size="small" onClick={card.urlWebsite ? () => window.open(card.urlWebsite, '_blank') : null}> Voir le site</Button> : <></>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
            ))}
                </Grid>
            </Box>

        </div>
    );
}

