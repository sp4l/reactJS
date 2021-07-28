import React, { Component } from 'react'

export default class MessageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            author: "Aleks",
            items: []
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({
            text: event.target.value
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            // submit: this.state.text
            text: this.state.text,
            items: [...this.state.items, this.state.text]
        });
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
                {/* <p>{this.state.submit}</p>
                <p>{this.state.author}</p> */}
            </>
        )
    }
}
