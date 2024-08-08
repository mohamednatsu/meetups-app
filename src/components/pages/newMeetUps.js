import React, { useRef } from 'react'
import classes from "./newMeetUps.module.css"
import axios from 'axios';
export default function NewMeetUps() {
    const titleRef = useRef();
    const descRef = useRef();
    const linkRef = useRef();


    const addMeetupHandler = (meetup) => {
        axios.post("https://react-getting-app-552c7-default-rtdb.firebaseio.com/meetups.json",meetup)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredData = {
            title: titleRef.current.value,
            description: descRef.current.value,
            linkImage: linkRef.current.value
        }
        addMeetupHandler(enteredData)
    }

    return (
        <div className={classes.add}>
            <h1>New Meet Ups</h1>
            <form className={classes.form} onSubmit={submitHandler}>
                <div>
                    <label htmlFor='title'>Title: </label>
                    <input id='title' ref={titleRef} type='text' required/>
                </div>

                <div>
                    <label htmlFor='description'>Description: </label>
                    <textarea id='description' ref={descRef} type='text' rows={5}/>
                </div>

                <div>
                    <label htmlFor='linkimage'>Url Image: </label>
                    <input id='linkimage' ref={linkRef} required type='url'/>
                </div>

                <div className={classes.btn}>
                    <button>
                        Add MeetUp
                    </button>
                </div>
            </form>
        </div>
    )
}
