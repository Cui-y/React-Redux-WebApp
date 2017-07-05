import React, {Component} from 'react';
import './index.less';
export default class Buy extends Component {

    constructor() {
        super();
        this.state = {}
    }

    store = () => {
        this.props.collection();
    };

    shopping = () => {
        this.props.buy();
    };

    render() {
        return (
            <div className="buy">
                {
                     <button className={this.props.isCollected?'collected':''} onClick={this.store}>{this.props.isCollected ?'已收藏':'收藏'}</button>
                }
                <button onClick={this.shopping}>购买</button>
            </div>
        )
    }
}
