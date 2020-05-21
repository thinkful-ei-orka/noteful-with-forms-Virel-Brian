import React, { Component } from 'react';
import {NotefulContext} from '../NotefulContext';

export default class AddNote extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            "name": {
                value:"",
                touched: false
            },
            "folderId": {
                value:"",
                touched: false
            },
            "content": {
                value:"",
                touched: false
            },
            
          }
    }
    static contextType = NotefulContext;
    newNote = ()=>{


        let postNote = {
            "name":this.state.name.value,
            "modified": new Date(),
            "folderId":this.state.folderId.value,
            "content":this.state.content.value
        };
        postNoteString = JSON.stringify(postNote);
        fetch(`http://localhost:9090/notes/`,{
            method:"POST",
            headers: {"content-type": "Application/json"},
            body= postNoteString
        })
    }

    NameState = (name)=>{
        this.setState({
            "name": {
                value:this.state.name.value,
                touched: true
            }
        })
    }

    folderIdState= (folderId)=>{
        this.setState({
            "folderId":{
                value:this.state.folderId.value,
                touched:true
            }
        })
    }

    contentState =(content)=>{
        this.state.name({
            "state":{
                value:this.state.content.value,
                touched: true
            }
        })
    }

    render(){
        let { folders } = this.context;
        console.log(folders);
        let options = folders.map(folder=>{
            console.log(folder.id);
            return <option key={folder.id} value={folder.id}>{folder.name}</option>
        })
        return(
            <form type="submit" id="AddNoteForm">
            <label htmlFor="NameInput" >Name</label>
            <input id="NameInput" onChange={e=> this.NameState(e.target.value)} value={this.state.name.value}></input>
            <label htmlFor="ContentInput">Description</label>
            <textarea id="ContentInput" onChange={e=> this.contentState(e.target.value)} name="AddNoteForm" value={this.state.content.value}></textarea>
            <select>
                {options}
            </select>
            <button type="submit">Add Note</button>
            </form>
        )
    }
}