
const authReducer = (state = {
    isAdmin: false,
    isLogged: false
}, action) => {
    switch (action.type) {
        case "SET_ADMIN":
            return state = {
                ...state,
                isAdmin: action.payload
            }
        case "LOGGED":
            return state = {
                ...state,
                isLogged: action.payload
            }

        default:
            return state
    }
}
export default authReducer