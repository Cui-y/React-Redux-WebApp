import React, {Component} from 'react';
import './index.less';
import Star from "../Star/index";
export default class InfoComponent extends Component {


    render() {
        let {img, desc, title, subTitle, star, price} = this.props.data;
        return (
            <div className="info-component">
                <div className="info-content">
                    <img src={img} alt=""/>
                    <div className="info-detail">
                        <h3>{title}</h3>
                        <div className="star-price">
                            <Star starNum={star}/>
                            <span>￥{price}</span>
                        </div>
                        <p>{subTitle}</p>
                    </div>
                </div>
                {/*dangerouslySetInnerHTML:将内容转化成html插入到页面中*/}
                <div className="desc" dangerouslySetInnerHTML={{__html: desc}}></div>
            </div>
        )
    }
}
