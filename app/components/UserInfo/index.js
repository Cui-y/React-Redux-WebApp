import React,{Component} from 'react';
import './index.less';

export default class UserInfo extends Component{



    render(){
        let {username,city} = this.props;
        return (
            <div className="user-info">
                <p><i className="iconfont icon-wode"></i>用户名 : {username}</p>
                <p><i className="iconfont icon-dizhi"></i>所在城市 : {city}</p>
            </div>
        )
    }
}


/*
* 高性能JavaScript
* JavaScript语言精粹
* HTTP权威指南
* 数据结构和算法的JavaScript描述
* 精通正则表达式
* 你不知道的 JavaScript
* 设计模式
* */
