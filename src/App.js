import React, { Component } from 'react';
import ToolBox from './components/ToolBox';
import FormContainer from './components/FormContainer';
import './css/App.css';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';

class TestComponent extends  Component{
    constructor(props){
        super(props)
        this.state = {
            toolType: 'CUSTOM_COM',
            num1 : 1,
            num2 : 2
        }
    }

    changeValue(value){
        this.setState({
            num1 : value
        })
        setTimeout(() => {
            return this.props.changeState(this.state, this.props.index);
        }, 0)
    }

    render(){
        return (
            <div className="card">
               <div className="card-body">
                    <div className="container">
                        <span className='pull-right cross' onClick={() => this.props.removeField(this.props.index)}>x</span>
                        <input onChange={(e) => this.changeValue(e.target.value)} type="text"/>
                    </div>
                </div>
            </div>
        )
    }
}

class TestPreview extends  Component{
    render(){
        return <h3>{ this.props.toolType }</h3>
    }
}


const myCustoms = [
    {
        container : <TestComponent />,
        preview : <TestPreview />,
        toolbox : {
            title : 'Input',
            icon : 'fa fa-user',
            name : 'CUSTOM_COM'
        },
        states : {
            toolType: 'CUSTOM_COM',
            num1 : 1,
            num2 : 2
        }
    }
]

class App extends Component {
  render() {
    return (
      <div>
        <Navbar className="navbar"  bg="light" variant="light">
    <Navbar.Brand href="#home"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf8DqEwZAZotm_gYkQpdyJ8LHXHGQIHLh-rg&usqp=CAU" 
      width="96" height="60"/></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#Logo"></Nav.Link>
    </Nav>
    <Form inline>
    </Form>
  </Navbar>
  <br></br>
        <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <FormContainer
                        loader={false}
                        debug={false}
                        updateOnMount={true}
                        updateForm={this.updateForm}
                        onSave={this.myForm}
                        custom={ myCustoms } />
                </div>  
                <div className="col-md-5">
                    <ToolBox custom={ myCustoms } />
                </div> 
            </div>
        </div>
      </div>
    );
  }

  updateForm(callback){
   
  }

  myForm(form){
      console.log(form);
  }
}

export default App;