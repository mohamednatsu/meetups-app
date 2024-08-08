import React, { useContext } from 'react'
import { Link } from 'react-router-dom'


import classes from "./MainNavigation.module.css"
import FavoritesContext from '../../store/favourites-context'

export default function MainNavigation() {

    const favCtx = useContext(FavoritesContext)
    return (
        <header className={classes.header}>
        <div className={classes.logo}>
            MeetUpsGo
        </div>
        <nav>
            <ul className={classes.nav}>
                <li>
                    <Link to={"/"}>
                    All Meetups
                    </Link>
                </li>
                <li>
                    <Link to={"/new-meetup"}>
                    Add new meeetup
                    </Link>
                </li>
                <li>
                    <Link to={"/favourites"}>
                    Favorites
                    <span className={classes.badge}>
                        {favCtx.totalFavorites}
                    </span>
                    </Link>
                </li>
            </ul>
        </nav>
        </header>
    )
}
