import { createContext, useState } from "react";


// here to create context
const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (FavoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemsIsFavorite: (meetupId) => {},
});

// and then create the provider
export function FavoritesContextProvider(props) {

    const [userFavorites, setUserFavorites] = useState([]);


    function addFavoritesHandler(favoriteMeetup) {
        setUserFavorites((prevFav => {
            return prevFav.concat(favoriteMeetup)
        }));
    }

    function removeFavoritesHandler(meetupId) {
        setUserFavorites((prevFav => {
            return prevFav.filter(meetup => meetup.id !== meetupId)
        }));
    }

    function isItemFavoriteHandler(meetupId) {
        return userFavorites.some((meetup) => meetup.id === meetupId);
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoritesHandler,
        removeFavorite: removeFavoritesHandler,
        itemsIsFavorite: isItemFavoriteHandler,
    }

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}


export default FavoritesContext;