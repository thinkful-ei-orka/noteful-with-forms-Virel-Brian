import React, { Component } from 'react';
import { NotefulContext } from '../NotefulContext';

export default class AddFolder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "name": {
                value: "",
                touched: false
            }

        }
    }
    static contextType = NotefulContext;
    newFolder = () => {

        console.log('newFolder ran')
        let postFolder = {
            "name": this.state.name.value
        };
        let postFolderString = JSON.stringify(postFolder);
        fetch('http://localhost:9090/notes/', {
            method: "POST",
            headers: { "content-type": "Application/json" },
            body: postFolderString
        })
            .then(res => res.json())
            .then(data => this.context.addSetState(data, () => this.props.history.push('/')))
    }

    setNameState = (name) => {
        this.setState({
            "name": {
                value: name,
                touched: true
            }
        })
    }

    validateName = () => {
        if (this.state.name.value) { return true }
    }

    validator = () => {
        if (this.validateName() === true) {
            this.newNote()
            // return true
        } else {
            console.log('No data')
        }
    }



    render() {
        let { folders } = this.context;
        
        return (
            <form id="AddFolderForm" onSubmit={e => {
                e.preventDefault();
                this.validator()
            }}>
                <label htmlFor="FolderInput" >Name</label>
                <input id="FolderInput" type='text'
                    onChange={e => this.setNameState(e.target.value)} value={this.state.name.value}></input>
                
                <button type="submit" >Add Note</button>
            </form>
        )
    }
}