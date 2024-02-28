"use client";
import React from 'react';
import styles from "../Education.module.css";
import Logos from './Logos';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';



export default function Education() {
    const displayPdf = () => {
        const pdfUrl = 'CV.pdf';
        window.open(pdfUrl, '');
    };

    return (
        <div>
            <div className={styles.titlebox}>
                <h2 className={styles.title}>Parcours</h2>
                <hr className={styles.hr}></hr>
            </div>
            <div>
                <Logos/>
            </div>
            <div className={styles.seeMore}>
                <p className={styles.seeMoreText}>Pour en savoir plus sur mes expériences professionnelles avant ma reconversion</p>
                <div>

                    <Button 
                        startIcon={<CloudUploadIcon />} variant="outlined"
                        onClick={() => displayPdf()} 
                    >
                        Voir le CV
                        
                    </Button>
                </div>
            </div>
        </div>
    );
}

