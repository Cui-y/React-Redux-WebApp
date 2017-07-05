import 'whatwg-fetch';
import 'es6-promise';


export function get(url) {
    return fetch(url, {
        headers: {
            accept: 'application/json'
        }
    }).then(res => res.json())
}


function toUrlencoded(obj) {
    let ary = [];
    for (let key in obj) {
        ary.push(`${key} = ${obj[key]}`);
    }
    return ary.join('&');
}

export function post(url, obj) {  //id:1,content:ok ===> 转化为 表单格式   a=1&b=2&c=3
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: toUrlencoded(obj)
    }).then(res=>res.json())     /*将响应的内容以JSON格式解析,所以后台要返回一个json格式的,否则会报错*/
}