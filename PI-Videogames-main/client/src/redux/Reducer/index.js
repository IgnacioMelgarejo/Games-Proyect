const initialState = {
    games: [],
    allGames: [],
    platforms: [],
    gender: [],
    details: [],
    favorites: []

}


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_GAMES":
            return {
                ...state,
                games: action.payload,
                allGames: action.payload
            }
        case "GET_GENDER":

            return {
                ...state,
                gender: action.payload
            }
        case "GET_NAME_GAME":
            let nameGame = action.payload
            return {
                ...state,
                games: nameGame
            }
        case "ORDER_BY":

            let sortByName = action.payload === "Order by" ? state.games :
                action.payload === "Rating" ? state.games.sort((a, b) => b.rating - a.rating) :
                    action.payload === "MinRating" ? state.games.sort((a, b) => a.rating - b.rating) :
                        action.payload === "DataBase" ? state.games.filter(e => e.genders) :
                            action.payload === "Asc" ?
                                state.games.sort((a, b) => {
                                    if (a.name > b.name) return 1
                                    if (b.name > a.name) return -1
                                    return 0
                                }) : state.games.sort((a, b) => {
                                    if (a.name > b.name) return -1
                                    if (b.name > a.name) return 1
                                    return 0
                                })
            return {
                ...state,
                games: sortByName
            }

        case "ORDER_BY_GENDER":
            
            let genderName = action.payload
            state.games = state.allGames.filter(e => e.gender?.includes(genderName))
            if (action.payload === "Order by Gender") state.games = state.allGames
            if (state.games.length === 0) {
                alert("No hay resultados")
                state.games = state.allGames
            }
            return {
                ...state,
                games: state.games
            }
        case 'GET_ALL_PLATFORMS':
            return {
                ...state,
                platforms: action.payload
            }
        case "POST_GAME":
            return {
                ...state
            }
        case "GET_DETAILS":
            return {
                ...state,
                details: action.payload
            }
        case "GET_FAVORITES":
            let id = action.payload
            
            let favoriteSelected = state.allGames.find(e => e.id.toString() === id)
            
            let favoriteIndex = state.favorites.indexOf(favoriteSelected)
            


            !state.favorites.includes(favoriteSelected) ? state.favorites.push(favoriteSelected) : favoriteIndex !== -1 ? state.favorites.splice(favoriteIndex, 1) : console.log("funciona bien")


            return {
                ...state,
                ...state.favorites
            }

        
        case "CLEAR":
            return {
                ...state,
                details: action.payload
            }
        default: return state
    }
}


export default rootReducer;








