import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

export default class MessageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            author: "Aleks",
            items: []
        };
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
            console.log(this.state.author)
        }
    }

    render () {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <TextField value={this.state.text} onChange={this.handleChange} label="" id="outlined-size-small" defaultValue="Small" variant="outlined" size="small"
                    autoFocus={true} />
                    <Button type="submit" variant="contained" size="large" color="primary">
                        Отправить
                    </Button>
                </form>
                <div>
                    {this.state.items.map((item, index) => (
                    <p key={index}>{item}</p>))}
                </div>
            </>
        )
    }
}
