import React,{Component} from 'react';
import CommentItem from "./CommentItem/index";

export default class CommentList extends Component{



    render(){
        return (
            <ul className="comment-component">
                {
                    this.props.data.map((item,index)=>(
                        <CommentItem data={item} key={index} />
                    ))
                }
            </ul>
        )
    }
}
