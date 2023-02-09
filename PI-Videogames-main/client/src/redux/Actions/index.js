import axios from "axios"

export const getVideoGames = () => {
    return async (dispatch) => {
        const json = await axios("http://localhost:3001/videoGames")
        return dispatch({
            type: "GET_GAMES",
            payload: json.data
        })
    }
}


