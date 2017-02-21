import React, {  Component } from 'react'

import Single from '../components/Single'

export default class Page extends Component {
    //componentDidMount() {
    //    let a = [...this.props.cards];
    //    for (let i = a.length; i; i--) {
    //        let j = Math.floor(Math.random() * i);
    //        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    //    }
    //    this.props.shuffle(a);
    //}
    showDesc(e) {
        e.target.parentNode.parentNode.querySelector('.desc').classList.toggle('showDesc');
    }
    render() {
        //const { cards, i } = this.props;
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
            <ul>
                { listToShow }
            </ul>
        </div>
    }
}
