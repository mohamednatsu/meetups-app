import React, { useContext } from 'react'
import classes from "./MeetUp.module.css"
import FavoritesContext from '../../../store/favourites-context'



export default function MeetUp(props) {
    const favoriteCtx = useContext(FavoritesContext)

    const itemsIsFavorite = favoriteCtx.itemsIsFavorite(props.id)


    function toggleFavoriteHandler()
    {
        if (itemsIsFavorite) {
            favoriteCtx.removeFavorite(props.id)
        }
        else {
            favoriteCtx.addFavorite({
                id: props.id,
                title: props.title,
                description: props.description,
                linkImage: props.linkImage
            })
        }
    }

    return (
        <div className={classes.card}>
        <div className={classes.image}>
            <img src={props.linkImage} alt="" />
        </div>

        <div className={classes.text}>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>

        <div className={classes.btn}>
            <button onClick={toggleFavoriteHandler}>
                {itemsIsFavorite ? "Remove From The Favorites" : "Add To Favorite"}
            </button>
        </div>
        </div>
    )
}
