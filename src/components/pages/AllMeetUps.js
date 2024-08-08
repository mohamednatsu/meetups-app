import React, { useEffect, useState } from 'react'

import classes from "./AllMeetUps.module.css"
import MeetupList from './ui/MeetupList';
import axios from 'axios';
export default function AllMeetUps() {
    const [isLoading, setIsLoading] = useState(false);
    const [meetups, setMeetUps] = useState([]);

    useEffect(() => {
        const handleData = () => {
            setIsLoading(true);
            axios.get("https://react-getting-app-552c7-default-rtdb.firebaseio.com/meetups.json")
            .then(res => {
                const fetchedMeetups = [];
                // meetups.push(res.data)
                for (const key in res.data){
                    const meetup = {
                        id: key,
                        ...res.data[key]
                    };
                    fetchedMeetups.push(meetup)
                }

                setIsLoading(false)
                setMeetUps(fetchedMeetups);
            })
            .catch(err => {
                console.log(err)
            })
        }
        handleData();
    }, [])


    return (
        <>
            <h2 style={{color: "white", textAlign: "center", fontSize: "27px"}}>All Meetups</h2>
            {isLoading && <p style={{color: "white", textAlign: "center"}}>loading...</p>}
            <MeetupList meetups={meetups} />
        </>
    )
}
