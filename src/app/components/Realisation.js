"use client";
import React, { useState } from 'react';
import styles from "../Realisation.module.css";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const cards = [
    {
        img: 'unicaen-stud.png',
        text: 'le premier texte',
        buttonGit: true,
        buttonWebsite: true,
        urlWebsite: "https://unicaen.studapart.com/fr/"
    },
    {
        img: 'ia.png',
        text: 'le deuxième texte',
        buttonGit: false,
        buttonWebsite: true,
    },
    {
        img: 'ia.png',
        text: 'zertyui',
        buttonGit: true,
        buttonWebsite: false,
    },
    {
        img: 'ia.png',
        text: 'zertyui',
        buttonGit: true,
        buttonWebsite: false,
    },
    {
        img: 'unicaen-stud.png',
        text: 'le premier texte',
        buttonGit: true,
        buttonWebsite: true,
        urlWebsite: "https://unicaen.studapart.com/fr/"
    },
    {
        img: 'unicaen-stud.png',
        text: 'le premier texte',
        buttonGit: true,
        buttonWebsite: true,
        urlWebsite: "https://unicaen.studapart.com/fr/"
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
                <Grid container rowSspacing={24} className={styles.grid} columnSpacing={{ xs: 1, sm: 2, md: 8 }}>
            {cards.map((card, index) => (
                <Grid item key={index} xs={12} sm={12} md={6}>
                    <div className={`${styles.flipCard} ${flippedIndex === index ? styles.flipped : ''}`} onClick={() => handleCardClick(index)}>
                        <div className={styles.flipCardInner}>
                            <div className={styles.flipCardFront}>
                                <img className={styles.img} src={card.img} alt="Nom de l'image" />
                            </div>
                            <div className={styles.flipCardBack}>
                                <div className={styles.backContent}>
                                <span>{card.text}</span>
                                <div className={styles.buttons}>
                                    <div>
                                    {card.buttonGit ? <Button className={styles.button} variant="outlined" size="small"> Voir le code</Button> : <></>}
                                    </div>
                                    <div>
                                    {card.buttonWebsite ? <Button variant="outlined" size="small" onClick={card.urlWebsite ? () => window.open(card.urlWebsite, '_blank') : null}> Voir le site</Button> : <></>}
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

