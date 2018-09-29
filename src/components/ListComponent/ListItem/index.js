import React, {Component} from 'react';
import './index.less';
import {Link} from 'react-router-dom';  //用于跳转路径,to属性必须
export default class ListItem extends Component {


    render() {
        let {img, title, subTitle, price, distance, number,id} = this.props.data;
        return (
            <Link to={`/detail/${id}`}>
                <li className="list-item">
                    <img src={img} alt={title}/>
                    <div className="list-item-content">
                        <h3>{title}</h3>
                        <p>{subTitle}</p>
                        <span className="distance">{distance}</span>
                        <div>
                            <span className="price">￥{price}</span>

                            <span className="number">已售{number}</span>
                        </div>
                    </div>
                </li>
            </Link>
        )
    }
}
