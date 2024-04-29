import React from 'react'
import styles from "../Contact.module.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';


export default function Contact() {
  return (
    <div className={styles.main}>
        <div className={styles.titlebox}>
                <h2 className={styles.title}>Contact</h2>
                <hr className={styles.hr}></hr>
            </div>
        <div className={styles.boxes}>
            <div className={styles.box}>

                    <div>
                        <LinkedInIcon color='primary' className={styles.icon}/>
                    </div>
                    <div>
                        <a href='https://www.linkedin.com/in/soumaya-laajaj-b69761140/'>LinkedIn</a>
                    </div>

            </div>
            <div className={styles.box}>
                <div>
                    <EmailOutlinedIcon sx={{ fontSize: 50 }}/>
                </div>
                <div>
                    <span>soumaya.laajaj@hotmail.fr</span>
                </div>
            </div>
        </div>
    </div>
    )
}
