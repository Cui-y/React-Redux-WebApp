import {get} from './index';

//获取商户信息
let url = 'http://localhost:4000';
export function getInfo(id) {
    return get(`${url}/api/detail/info/${id}`);
}

export function getComment(id,page) {
    return get(`${url}/api/detail/comment/${id}/${page}`);
}