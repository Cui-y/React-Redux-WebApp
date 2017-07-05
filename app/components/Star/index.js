import React, {Component} from 'react';

export default class Star extends Component {

    constructor(props) {
        super(props);
        let ary = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= props.starNum) {
                ary.push(true);
            } else {
                ary.push(false);
            }
        }
        this.state = {ary};
    }

    render() {
        return (
            <div>
                {
                    this.state.ary.map((item, index) => (
                        item ? <i key={index} className="iconfont icon-shoucang color"></i>
                            : <i key={index} className="iconfont icon-shoucang1 "></i>
                    ))
                }
            </div>
        )
    }
}
