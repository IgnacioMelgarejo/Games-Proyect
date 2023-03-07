const initialState = {
    games: [],
    allGames: [],
    platforms: [],
    gender: [],
    details:[]

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
        case "ORDER_BY_NAME":
            let sortByName = action.payload === "Order by Name" ? state.games :
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
            // const genderName = action.payload
            // const result = genderName === "Order by Gender" ? state.games :
            //     state.games.filter(e => e.gender?.includes(genderName))
            //     console.log(result)

            // return {
            //     ...state,
            //     games: result
            // }
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
        default: return state
    }
}


export default rootReducer;








