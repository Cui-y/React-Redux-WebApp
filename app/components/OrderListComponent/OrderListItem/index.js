import React, {Component} from 'react';
import './index.less'
export default class OrderListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {commentState: props.data.commentState};
    }

    comment = () => {
        this.setState({
            commentState: 1
        })
    };

    changeState = ()=>{
        this.setState({
            commentState: 2
        });
    };
    confirmSubmission = () => {
        let commentContent = this.refs.commentContent.value;
        this.props.submitCommentContent(this.props.data.id, commentContent,this.changeState);
    };

    cancel = () => {
        this.setState({
            commentState: 0
        })
    };

    render() {
        let {commentState, count, id, img, price, title} = this.props.data;
        return (
            <li className="order-list-item">
                <div className="order-detail">
                    <img src={img} alt=""/>
                    <div className="order-content">
                        <h3>{title}</h3>
                        <p>数量 : {count}</p>
                        <p>价格 : {price}</p>
                    </div>
                    <div className="comment-btn">
                        {/*三个状态: 0 未评价 1 正在评价 2 已评价完成*/}
                        {this.state.commentState === 0 ?
                            <button onClick={this.comment}>评价</button> : this.state.commentState === 1 ? '' :
                                <button className="commented">已评价</button>}

                    </div>
                </div>
                {this.state.commentState === 1 ? <div className="comment-area">
                    <textarea ref="commentContent" name="" id="" cols="30" rows="10"
                              placeholder="请在此输入评价内容!!!"></textarea>
                    <div className="comment-area-btn">
                        <button onClick={this.confirmSubmission}>确认评价</button>
                        <button onClick={this.cancel}>取消</button>
                    </div>
                </div> : ''}
            </li>
        )
    }
}
