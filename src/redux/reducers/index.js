//将多个reducers合并成一个并导出
import {combineReducers} from 'redux';
import {userInfo} from './userInfo';
import {collectionList} from './collection';
export default combineReducers({
    userInfo,
    collectionList
})

