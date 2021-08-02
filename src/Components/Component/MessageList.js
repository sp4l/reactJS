import React, { Component } from 'react'

export default class MessageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            author: "Aleks",
            items: []
        };
    
//        this.handleChange = this.handleChange.bind(this);
//        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange = (event) => {
        this.setState({
            text: event.target.value,
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            text: "",
            items: [...this.state.items, this.state.text]
        });
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (prevState.items !== this.state.items) {
            console.log('message update')
        }
    }

    render () {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.text} onChange={this.handleChange} />
                    <button type="submit">Отправить</button>
                </form>
                <div>
                    {this.state.items.map((item, index) => (
                    <p key={index}>{item}</p>))}
                </div>
            </>
        )
    }
}
