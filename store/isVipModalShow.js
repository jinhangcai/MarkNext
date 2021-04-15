// ------------------------------------
// Constants
// ------------------------------------
export const SHOW_VIP_MODAL = Symbol(1);
export const HIDE_VIP_MODAL = Symbol(1);
export const TOGGLE_VIP_MODAL = Symbol(1);
// ------------------------------------
// Action Creators
// ------------------------------------
export function showVipModal() {
    return {
        type: SHOW_VIP_MODAL,
    }
}

export function hideVipModal() {
    return {
        type: HIDE_VIP_MODAL,
    }
}

export function toggleVipModal() {
    return {
        type: TOGGLE_VIP_MODAL,
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
const initialState = false;
export default function isVipModalShow(state = initialState, action) {
    switch (action.type) {
        case SHOW_VIP_MODAL:
            return true;
        case HIDE_VIP_MODAL:
            return false;
        case TOGGLE_VIP_MODAL:
            return !state;
        default:
            return state;
    }
}
