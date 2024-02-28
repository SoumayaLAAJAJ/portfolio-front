import React from 'react';
import styles from "../Education.module.css"


const education = [
    {
        image: "capsule.png",
        date: 'Octobre 2022 - Décembre 2023',
        title: 'Bootcamp de développement web et mobile full stack JS',
        school: 'La Capsule',
    },
    {
        image: "next.png",
        date: 'Septembre 2021 - Mai 2022',
        title: 'Titre professionnel de Développement web et web mobile - Bac +2',
        school: 'NextFormation',
    },
    {
        image: "sorbonne.png",
        date: 'Septembre 2013 - Mai 2017',
        title: 'Licence de Langues Etrangères Appliquées Anglais Espagnol - Bac +3',
        school: 'Université Paris-Sorbonne',
    },
    {
        image: "fenelon.png",
        date: '2013',
        title: 'Bac ES - Mention AB',
        school: 'Lycée Fenelon',
    },
];

export default function Logos() {
    return (
        <div className={styles.body}>
            <div className={styles.content}>
                <div className={styles.isNotMobile}>
                    <div className={styles.logoBox}>
                        <div className={styles.text}>
                            <p className={styles.date}>Janvier 2023- Décembre 2023</p>
                            <p className={styles.school}>Développeuse web full stack</p>
                            <p className={styles.school}>Studapart</p>
                            <p className={styles.date}>Alternance</p>
                        </div>
                        <img className={styles.img} src='studapart.png'/>
                    </div>
                    <div className={styles.horizontalLine}></div>
                    <div className={styles.logoBox}>
                        <img className={styles.secondImg} src='capsule.png'/>
                        <div className={styles.text}>
                            <p className={styles.date}>Janvier 2023 - Janvier 2024</p>
                            <p className={styles.school}>Titre professionnel de Conceptrice Développeuse d’Applications web et web mobile - Bac +3/4</p>
                            <p className={styles.school}>La Capsule</p>
                            <p className={styles.date}>Parcours en alternance 3 jours par mois à l’école et le reste du mois en entreprise</p>
                        </div>
                    </div>
                </div>
                {education.map((edu, index) => (
                    <div className={styles.logoLine}>
                        <div className={styles.line}></div>

                        <div className={styles.logoBox} key={index}>
                            <div className={styles.imgDiv}>
                                <img className={styles.img} src={edu.image} alt={`Logo ${index}`} />
                            </div>
                            <div className={styles.text}>
                                <p className={styles.date}>{edu.date}</p>
                                <p className={styles.school}>{edu.title}</p>
                                <p className={styles.school}>{edu.school}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            

        </div>
    );
}

