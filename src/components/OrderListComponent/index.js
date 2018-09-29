import React, {Component} from 'react';
import OrderListItem from "./OrderListItem/index";
import './index.less';
export default class OrderListComponent extends Component {


    render() {
        return (
            <div>
                <h3 className="title">订单列表</h3>
                <ul>
                    {this.props.data.map((item, index) => (
                        <OrderListItem submitCommentContent={this.props.submitCommentContent} key={index} data={item}/>
                    ))}
                </ul>
            </div>
        )
    }
}
