import React, {Component} from 'react';

export default class SearchInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            keyword: props.value ? props.value : ''
        };
    }

    changeInput = (e) => {
        this.setState({
            keyword: e.target.value
        })
    };

    search = (e) => {
        let code = e.keyCode;
        if (code !== 13) {
            return;
        } else {
            this.props.toSearch(this.state.keyword);
        }
    };

    render() {
        return (
            /*受控组件,需要onChange+state配合*/
            <input onKeyDown={this.search} value={this.state.keyword} onChange={this.changeInput} type="text"/>
        )
    }
}
