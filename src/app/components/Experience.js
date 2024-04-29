"use client"
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

const education = [
    {
        image: <WorkIcon />,
        date: 'Janvier 2023 - Décembre 2024',
        title: 'Développeuse Full-Stack',
        school: 'Studapart',
        subtext: "Alternance - 3 jours par mois en cours, le reste du mois en entreprise"

    },
    {
        image: <SchoolIcon />,
        date: 'Octobre 2022 - Décembre 2023',
        title: 'Bootcamp de développement web et mobile full stack JS',
        school: 'La Capsule',
    },
    {
        image: <SchoolIcon />,
        date: 'Septembre 2021 - Mai 2022',
        title: 'Titre professionnel de Développement web et web mobile - Bac +2',
        school: 'NextFormation',
    },
    {
        image: <SchoolIcon />,
        date: 'Septembre 2013 - Mai 2017',
        title: 'Licence de Langues Etrangères Appliquées Anglais Espagnol - Bac +3',
        school: 'Université Paris-Sorbonne',
    },
    {
        image: <SchoolIcon />,
        date: '2013',
        title: 'Bac ES - Mention AB',
        school: 'Lycée Fenelon',
    },
];

export default function Experience() {
  return (
    <div className='experience'>
    <VerticalTimeline lineColor='#e5e5e5'>
        {education.map((item, index) => (
            <VerticalTimelineElement
                key={index}
                className='vertical-timeline-element--education'
                iconStyle={{background: '#e5e5e5', color: '#a9a9a9'}}
                icon={item.image}
                date={item.date}
                visible={true}
            >
                <h3 className="vertical-timeline-element-title">{item.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{item.school}</h4>
                <p>{item.subtext}</p>
            </VerticalTimelineElement>
        ))}
    </VerticalTimeline>
</div>
  )
}
