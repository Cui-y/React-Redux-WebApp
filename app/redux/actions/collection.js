import * as Types from '../action-types/collection';

//创建ActionCreators
export function add(id) {
    return {
        type: Types.ADD_COLLECTION,
        data:id
    }
}

export function del(id) {
    return {
        type: Types.DEL_COLLECTION,
        data:id
    }
}