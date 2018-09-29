import React, {Component} from 'react';
import SearchHeader from "../../components/SearchHeader/index";
//可以从轮播菜单进入   /search/site
//头部搜索框进入      /search/all/keyword
export default class Search extends Component {


    toSearch = (keyword) => {
        this.props.history.push('/search/all/' + keyword);
    };

    render() {
        return (
            <div>
                {/*将路由参数keyword传递给UI组件显示,如果没有则为空*/}
                <SearchHeader
                    value={this.props.match.params.keyword || ''}
                    history={this.props.history}
                    toSearch={this.toSearch}
                />
            </div>
        )
    }
}
