import React,{Component} from 'react';
import Star from "../../Star/index";
import './index.less'
export default class CommentItem extends Component{



    render(){
        let {comment,star,username} = this.props.data;
        return (
            <li className="comment-item">
                <div>
                    <i className="iconfont icon-yonghufill"></i>
                    <span>{username}</span>
                </div>
                <Star starNum={star}/>
                <p>{comment}</p>
            </li>
        )
    }
}
