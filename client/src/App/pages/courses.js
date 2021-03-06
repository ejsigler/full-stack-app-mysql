import React, { Component } from 'react';


export default class Courses extends Component {
    state = {
        editing: false,
        text: 'Default Text'
    }
    
    constructor(props) {
        super(props);
    
    }

    editText = () => {
        this.setState({editing:true});
    }
    
    textChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({editing:false});
        
        
  


    }

    render() {

        let form = (
            <input type="button" onClick={this.editText} value="EDIT ME!!!"/>   
        );

        if(this.state.editing) {
            form = (
                <form onSubmit={this.handleSubmit}>
                    <textarea name="text" onChange={this.textChange} >{this.state.text}</textarea>
                    <input type="submit"/>
                </form>
            );
        }

        return (
            <div>
                <label>Courses Taken:</label>
                <p>{this.state.text}</p>
                {form}
            </div>
        )
    }

}