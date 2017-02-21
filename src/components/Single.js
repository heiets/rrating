import React, {  Component } from 'react'

export default class History extends Component {
    render() {
        return <div className="desc">
            <div className="description">{this.props.description}</div>
            <div className="address">{this.props.address}</div>
            <div className="time">{this.props.time}</div>
        </div>
    }
}
