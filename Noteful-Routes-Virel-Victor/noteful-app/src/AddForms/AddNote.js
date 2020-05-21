import React, { Component } from 'react';
import { NotefulContext } from '../NotefulContext';

export default class AddNote extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "name": {
                value: "",
                touched: false
            },
            "folderId": {
                value: "",
                touched: false
            },
            "content": {
                value: "",
                touched: false
            },

        }
    }
    static contextType = NotefulContext;
    newNote = () => {
        console.log('newNote ran')
        let postNote = {
            "name": this.state.name.value,
            "modified": new Date(),
            "folderId": this.state.folderId.value,
            "content": this.state.content.value
        };
        let postNoteString = JSON.stringify(postNote);
        fetch('http://localhost:9090/notes/', {
            method: "POST",
            headers: { "content-type": "Application/json" },
            body: postNoteString
        })
            .then(res => res.json())
            .then(data => this.context.addSetState(data,()=> this.props.history.push('/')))
    }

    setNameState = (name) => {
        this.setState({
            "name": {
                value: name,
                touched: true
            }
        })
    }

    setFolderIdState = (folderId) => {
        this.setState({
            "folderId": {
                value: folderId,
                touched: true
            }
        })
    }

    setContentState = (content) => {
        this.setState({
            "content": {
                value: content,
                touched: true
            }
        })
    }
    validateName = () => {
        if (this.state.name.value) { return true }
    }
    validateContent = () => {
        if (this.state.content.value) { return true }
    }

    validator = () => {
        if (this.validateName() === true && this.validateContent() === true) {
            this.newNote()
            // return true
        } else {
            console.log('No data')
        }
    }



    render() {
        let { folders } = this.context;
        //console.log(folders);
        let options = folders.map(folder => {
            //console.log(folder.id);
            return <option
                key={folder.id}
                value={folder.id}
            >{folder.name}
            </option>
        })
        return (
            <form id="AddNoteForm" onSubmit={e => {
                e.preventDefault();
                this.validator()
            }}>
                <label htmlFor="NameInput" >Name</label>
                <input id="NameInput" type='text'
                    onChange={e => this.setNameState(e.target.value)} value={this.state.name.value}></input>
                <label htmlFor="ContentInput">Description</label>
                <textarea id="ContentInput" onChange={e => this.setContentState(e.target.value)} name="AddNoteForm" value={this.state.content.value}></textarea>
                <select onChange={e => this.setFolderIdState(e.target.value)}>
                    {options}
                </select>
                <button type="submit" >Add Note</button>
            </form>
        )
    }
}