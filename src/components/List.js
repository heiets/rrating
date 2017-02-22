import React, {  Component } from 'react'

import Single from '../components/Single'

export default class Page extends Component {
    showDesc(e) {
        e.target.parentNode.parentNode.querySelector('.desc').classList.toggle('showDesc');
        e.target.parentNode.parentNode.querySelector('.item').classList.toggle('active');
    }
    render() {
        var replace = this.props.searchValue;
        var re = new RegExp(replace,'gim');
        const listToShow = this.props.filteredList.map((v,i) => (
            <li key={i}>
                <div className="item" onClick={::this.showDesc}>
                    <div className="item__id">{v.id}</div>
                    <div className="item__title" dangerouslySetInnerHTML={{ __html: v.title.replace(re,`<div class="highlight">$&</div>`) }}></div>
                    <div className="item__town" dangerouslySetInnerHTML={{ __html: v.town.replace(re,`<div class="highlight">$&</div>`) }}></div>
                    <div className="item__likes">{v.likes}</div>
                    <div className="item__price">{v.price}</div>
                </div>
                <Single description={v.description} address={v.address} time={v.time}/>
            </li>
        ));
        return <div className="list">
            <div className="item active">
                <div className="item__id">№</div>
                <div className="item__title">Title</div>
                <div className="item__town">Town</div>
                <div className="item__likes">Likes</div>
                <div className="item__price">Price</div>
            </div>
            <ul>
                { listToShow }
            </ul>
        </div>
    }
}
