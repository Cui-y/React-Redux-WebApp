import * as Types from '../action-types/collection';
let initState = [];
export function collectionList(state = initState, action) {
    switch (action.type) {
        case Types.ADD_COLLECTION:
            return [...state, action.data];
        case Types.DEL_COLLECTION:
            return state.filter(id => id !== action.data);
        default:
            return state;
    }
}