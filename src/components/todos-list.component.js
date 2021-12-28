import React, { Component } from 'react';

export default class TodosList extends Component {
    componentDidMount(){
        console.log("Working");
    }
    render() {
        return (
            <div>
                <p>Welcome to Todos List Component!!</p>
            </div>
        )
    }
}