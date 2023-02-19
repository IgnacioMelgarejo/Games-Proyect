const initialState = {
    games: []
}
console.log(initialState.games)

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_GAMES":
            return {
                ...state,
                games: action.payload
            }
        case "GET_NAME_GAME":
            let nameGame = action.payload
            return {
                ...state,
                games: nameGame
            }
        case "ORDER_BY_NAME":
            let sortByName = action.payload === "Asc" ?
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
        default: return state
    }
}


export default rootReducer;








