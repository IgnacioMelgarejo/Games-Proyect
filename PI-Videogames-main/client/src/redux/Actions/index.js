import axios from "axios"

export const getVideoGames = () => {
    return async (dispatch) => {
        const json = await axios("/videoGames")
        return dispatch({
            type: "GET_GAMES",
            payload: json.data
        })
    }
}
export const getGender = () => {
    return async (dispatch) => {
        const json = await axios("/gender")
        return dispatch({
            type: "GET_GENDER",
            payload: json.data
        })
    }
}


export const getNameGame = (name) => {
    return async function (dispatch) {
        let json = await axios(`/videoGames?name=${name}`);
        return dispatch({
            type: "GET_NAME_GAME",
            payload: json.data
        });
    }
}


export const orderByName = (payload) => {

    return {
        type: "ORDER_BY",
        payload

    }
}


export const orderByGender = (payload) => {
    return {
        type: "ORDER_BY_GENDER",
        payload
    }
}


export function clear() {
    return {
      type: "CLEAR",
      payload: []
    }
  }

export const postGame = (post) => {
    console.log(post)
    return async function (dispatch) {
        const json = await axios.post(`/videogames`, post);
        return  dispatch ({
            type: "POST_GAME",
            payload: json.data
        })
    }
}

export function getAllPlatforms() {
    return async function (dispatch) {
        const json = await axios.get(`/videogames/platforms`)
        const platformss = json.data
        return dispatch({
            type: 'GET_ALL_PLATFORMS',
            payload: platformss
        })
    }
}

export const getFavorites = (payload) => {
    return {
        type: "GET_FAVORITES",
        payload
    }
}


export const getDetails = (id) => {
    return async function (dispatch) {
        try {
            let json = await axios(`/videogames/${id}`);
            return dispatch({
                type: "GET_DETAILS",
                payload: json.data
            }); 
        } catch (error) {
            console.log(error)
        }
    }
}
  


