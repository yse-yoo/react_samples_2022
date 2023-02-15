import React, { Component } from 'react'

export default class Message extends Component {

    message = 'デフォルト';

    constructor(props) {
        super(props);
        if (props.message) this.message = props.message;
    }

    render() {
        return (
            <div>{this.message}</div>
        )
    }
}
