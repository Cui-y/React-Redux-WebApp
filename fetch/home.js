import {get} from './index.js';


//获取广告数据
let url = 'http://localhost:4000';
export function getAd() {
    return get(url + '/api/ad');
}

//获取首页列表数据
export function getList(city, page) {
    return get(url + `/api/list/${city}/${page}`);
}