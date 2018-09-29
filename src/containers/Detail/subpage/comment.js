import React, {Component} from 'react';
import {getComment} from '../../../../fetch/detail'
import CommentList from "../../../components/CommentList/index";
import LoadMore from "../../../components/LoadMore/index";

export default class Comment extends Component {

    //获取数据,默认加载第一页,下拉刷新
    constructor() {
        super();
        this.state = {
            data: [],
            hasMore: true,
            page: 0,
            isLoading: true
        }
    }

    componentDidMount() {
        let id = this.props.id;
        getComment(id, 0).then(({hasMore, data}) => {
            this.setState({
                data,
                hasMore,
                isLoading: false
            })
        })
    }

    loadMore = () => {
        let id = this.props.id;
        this.setState({
            page: this.state.page + 1,
            isLoading: true
        }, () => {
            getComment(id, this.state.page).then(({hasMore, data}) => {
                this.setState({
                    hasMore,
                    data: this.state.data.concat(data),
                    isLoading:false
                })
            })
        })
    };

    render() {
        return (
            <div>
                {this.state.data.length ? <CommentList hasMore={this.state.hasMore} data={this.state.data}/> :
                    <div>正在加载数据...</div>}
                <LoadMore hasMore={this.state.hasMore} isLoading={this.state.isLoading} loadMore={this.loadMore}/>
            </div>
        )
    }
}
