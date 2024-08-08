import React, { useContext } from 'react'
import MeetupList from './ui/MeetupList'
import FavoritesContext from '../../store/favourites-context'



export default function Favourites() {

    const favCtx = useContext(FavoritesContext);

    return (
        <div>
            <h2 style={{color: "white", textAlign: "center", fontSize: "27px"}}>My Favorites</h2>
            {favCtx.favorites.length === 0 && <p style={{color: "white", textAlign: "center", fontSize: "17px"}}>Let's to add some items!</p>}
            <MeetupList meetups={favCtx.favorites} />
        </div>
    )
}
