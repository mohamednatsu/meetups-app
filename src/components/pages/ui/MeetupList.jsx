import React, { useEffect, useState } from 'react'

import MeetUp from './MeetUp'
import axios from 'axios';
import classes from "./MeetUp.module.css"

export default function MeetupList(props) {
    return (
        <>
        <div className={classes.cards}>

            {props.meetups.map(meetup => (
                <MeetUp 
                key={meetup.id}
                id={meetup.id}
                linkImage={meetup.linkImage}
                title={meetup.title}
                description={meetup.description}
                />
            ))}
            </div>
        </>
    )
}
