// ------------------------------------
// Constants
// ------------------------------------
export const SET_SUBJECT_LIST ='SET_SUBJECT_LIST';

// ------------------------------------
// Action Creators
// ------------------------------------
export function setSubjectList(list=[]) {
    return {
        type: SET_SUBJECT_LIST,
        list,
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
const initialState = [];
export default function subjectList(state = initialState, action) {
    switch (action.type) {
        case SET_SUBJECT_LIST:
            return action.list || [];
        default:
            return state;
    }
}
