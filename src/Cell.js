import React, { Component } from 'react';
// import Matrix from './Matrix.js'


export default class Cell extends Component {

    constructor(props) {
        super(props)
        this.state = {
            color: props.value
        }
    }

    updateColor = () => {
        this.setState({
        color: '#333'
        })
    }

    render() {
        return (<div className="cell" onClick={this.updateColor} style={{backgroundColor: `${this.state.color}`}}></div>)
    }
}