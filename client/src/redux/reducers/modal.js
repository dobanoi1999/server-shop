const Modal = (state = { view: "LOGIN_FORM", show: false }, action) => {
    switch (action.type) {
        case "CHANGE_SHOW":

            return {
                ...state,
                show: action.payload
            }
        case "SET_MODAL_VIEW":
            return {
                ...state,
                view: action.payload
            }
        default:
            return state
    }

}

export default Modal