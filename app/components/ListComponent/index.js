import React, {Component} from 'react';
import ListItem from "./ListItem/index";
import './index.less'
export default class ListComponent extends Component {


    render() {
        return (
            <div className="list-component">
                <h3 className="hot">附近热卖</h3>
                {
                    this.props.data.map((item, index) => (
                        <ListItem key={index} data={item}/>
                    ))
                }
            </div>
        )
    }
}
