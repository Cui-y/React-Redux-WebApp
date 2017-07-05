import React, {Component} from 'react';
import ListComponent from "../../../components/ListComponent/index";
import {getList} from '../../../../fetch/home'
import LoadMore from "../../../components/LoadMore/index";

export default class List extends Component {

    constructor() {
        super();
        this.state = {
            hasMore: true,
            data: [],
            page: 0,
            isLoading: true
        };
    }

    //需要传递城市,从store中取
    componentDidMount() {
        let city = this.props.cityName;
        getList(city, 0).then(({hasMore, data}) => {
            this.setState({
                hasMore,
                data,
                isLoading: false
            })
        })
    }

    loadMore = () => {
        let city = this.props.cityName;
        this.setState({
            page: this.state.page + 1,
            isLoading: true
        }, () => {
            getList(city, this.state.page).then(({hasMore,data})=>{
                this.setState({
                    hasMore,
                    data:this.state.data.concat(data),
                    isLoading:false
                })
            })
        });
    };

    render() {
        return (
            <div>
                {
                    this.state.data.length ? <ListComponent data={this.state.data}/> : <div>数据加载中...</div>
                }
                <LoadMore hasMore={this.state.hasMore} isLoading={this.state.isLoading} loadMore={this.loadMore}/>
            </div>
        )
    }
}
