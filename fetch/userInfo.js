import {get,post} from './index';

let url = 'http://localhost:4000';
//获取订单列表
export function getOrderList(username) {
    return get(url + `/api/orderlist/${username}`);
}

//提交评价内容
//  /api/comment   提交内容{id,content}
export function commitComment(obj){
    return post(url+`/api/comment`,obj)
}