import { csrfFetch } from "./csrf"

/*--------------------------------------------------------------------*/
// type variables 

const SET_SESSION = 'session/SET_SESSION'
const REMOVE_SESSION = 'session/REMOVE_SESSION'





/*--------------------------------------------------------------------*/

/*ACTION CREATORS--------------------------------------------------------------------*/

export const setSession = (user) => ({
    type: SET_SESSION,
    payload: user
})

export const removeSession = () => ({
    type: REMOVE_SESSION,
})


/*--------------------------------------------------------------------*/
//THUNKS

export const login = (user) => async (dispatch) => {

    const { credential, password } = user

    const response = await csrfFetch("/api/session", {
        method: "POST",
        body: JSON.stringify({
            credential,
            password
        })
    })

    const data = await response.json()


    dispatch(setSession(data.user));

    return response;
}









/*--------------------------------------------------------------------*/

const initialState = {
    user: null
};

const sessionReducer = (state = initialState, action) => {

    let newState;

    switch (action.type) {
        case SET_SESSION:
            newState = Object.assign({}, state)
            newState.user = action.payload
            return newState

        case REMOVE_SESSION:
            newState = Object.assign({}, state);
            newState.user = null;
            return newState;

        default:
            return state;
    }
}


export default sessionReducer;