// ------------------------------------
// Constants
// ------------------------------------
export const SET_CURRENT_USER = Symbol(1);

// ------------------------------------
// Action Creators
// ------------------------------------
export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER,
        user,
    }
}

// ------------------------------------
// Specialized Action Creator
// ------------------------------------
// export const updateLocation = ({ dispatch }) => {
//     return (nextLocation) => dispatch(locationChange(nextLocation))
// }

// ------------------------------------
// Reducers
// ------------------------------------
const initialState = null;
export default function currentUser(state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                ...action.user,
            };
        default:
            return state;
    }
}
