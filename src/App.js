import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);

        this.state= {
            formValues: {}
        };
        this.formArray = [];
     }
    handleChange(e){
        e.preventDefault();
        let formValues = this.state.formValues;
        let name = e.target.name;
        let value = e.target.value;
        formValues[name] = value;
        this.setState({formValues})
    }
    handleSubmitForm(e){
        this.formArray.push(this.state.formValues);
        console.log(this.formArray);
        e.preventDefault();

    }

    render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
            <h2>Add Project Details:</h2>
            <form onSubmit={this.handleSubmitForm.bind(this)}>
            <input type="text" name="projectTitle" placeholder="Project title" value={this.state.formValues["projectTitle"]} onChange={this.handleChange.bind(this)}/>
            <select name="projectType" onChange={this.handleChange.bind(this)} value={this.state.formValues["projectType"]}>
                <option defaultValue>Project Type</option>
                <option value="mobile">Mobile</option>
                <option value="windows">Windows</option>
                <option value="web">Web</option>
            </select>
            <button type="submit">Add Project</button>
            </form>
            <ListOfProject listToAdd={this.formArray}></ListOfProject>
        </div>
      </div>
    );
  }
}

class ListOfProject extends Component{

    ComponentWillReceiveProps(newProps){
        console.log("updated",newProps);
    }
    render(){
        return(
            <div class="list-of-project">
                <table>
                    <th>Project Title</th>
                    <th>Project Technology</th>
                    <th>Action</th>
                </table>
                <tbody>

                {this.props.listToAdd.map((details,i) => <TableBody key={i} data={details}/>)} 
                </tbody>
            </div>
        )
    }
}

class TableBody extends Component{
    render(){
        return(
            <tr>
                <td>{this.props.data.projectTitle}</td>
                <td>{this.props.data.projectType}</td>
                <td><button>Remove</button></td>
            </tr>
        )
    }
}
export default App;

