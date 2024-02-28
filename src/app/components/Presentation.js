import React from 'react'
import styles from "../Presentation.module.css"


export default function Presentation() {
  return (
    <div className={styles.body}>
      <div className={styles.titlebox}>
        <h2 className={styles.title}>Présentation</h2>
        <hr className={styles.hr}></hr>
      </div>
      <div className={styles.content}>
        <img src='photo.JPG' className={styles.img} alt='photo de profil'></img>
        <p className={styles.text}>
          Après une reconversion en 2021, deux diplômes et une première expérience professionnelle en 2023, je suis à la recherche d’un poste en CDI en temps plein en tant que <strong className={styles.strong}>développeuse web front-end ou intégratrice web</strong>. Je suis disponible dès maintenant (Février 2024) et recherche dans Paris et ses alentours.
        </p>
      </div>
    </div>
  )
}
