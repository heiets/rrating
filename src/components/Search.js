import React, { Component } from 'react'

export default class Description extends Component {
    search() {
        const formValue  = document.querySelector('#formInput').value;
        let filteredList = this.props.listToSearch.result.filter(v => (v.title.toLowerCase().indexOf(formValue) !== -1) || (v.town.toLowerCase().indexOf(formValue) !== -1));
        console.log(filteredList);
        this.props.setSearchValue(formValue);
        this.props.search(filteredList);
    }
    render() {
        return <div className="searchform">
            <input id="formInput" type="text" onChange={ ::this.search } />
        </div>
    }
}