// ------------------------------------
// Constants
// ------------------------------------
// export const SET_LESSON_COUNT = Symbol(1);
export const SET_LESSON_COUNT = 'SET_LESSON_COUNT';

// ------------------------------------
// Action Creators
// ------------------------------------
export function setLessonCount(lessonCount = 0) {
    return {
        type: SET_LESSON_COUNT,
        lessonCount,
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
const initialState = 0;
export default function lessonCount(state = initialState, action) {
    switch (action.type) {
        case SET_LESSON_COUNT:
            return action.lessonCount || 0;
        default:
            return state;
    }
}
