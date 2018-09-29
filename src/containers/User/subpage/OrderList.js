import React, {Component} from 'react';
import {getOrderList,commitComment} from '../../../../fetch/userInfo'
import OrderListComponent from "../../../components/OrderListComponent/index";

export default class OrderList extends Component {

    constructor() {
        super();
        this.state = {data: []};
    }

    componentDidMount() {
        let username = this.props.username;
        getOrderList(username).then(data => {
            this.setState({
                data
            })
        })
    }

    //提交评价到后台
    submitCommentContent = (id,content,callback) => { //评价内容,商户ID,callback改变状态
        commitComment({id,content}).then(data=>{
            callback();
        });
    };

    render() {
        return (
            <div>
                {this.state.data.length ? <OrderListComponent submitCommentContent={this.submitCommentContent} data={this.state.data}/> : <div>正在加载数据...</div>}
            </div>
        )
    }
}
