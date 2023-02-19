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


export const getNameGame = (name) => {
    return async function (dispatch) {
        let json = await axios(`http://localhost:3001/videoGames?name=${name}`);
        return dispatch({
            type: "GET_NAME_GAME",
            payload: json.data
        });
    }
}


export const orderByName = (payload) => {
    console.log(payload)
    return {
        type: "ORDER_BY_NAME",
        payload
        
    }
}