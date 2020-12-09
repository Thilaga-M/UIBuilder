import React, { Component } from 'react'

class Paragraph extends Component{

    constructor(props){
        super(props);
        this.state = {
            toolType : 'PARAGRAPH',
            tab : '',
            title : '',
            name : '',
            content : '',
            textColor : '#000000',
            backgroundColor : '#cccccc',
            color : '',
            fontSize : '10',
            align : 'center'
        }
    }

    componentWillMount(){
        this.setState(this.props.field);
    }

    fontSizes(){
        let sizes = [];
        for(let i = 6; i <= 72; i++){
            sizes.push(i);
        }
        return sizes;
    }


    changeValue(stateFor, value){
        switch (stateFor){
            case "NAME" :
                this.setState( { name : value } )
                break;
            case "TITLE" :
                this.setState( { title : value } )
                break;
            case "CONTENT" :
                this.setState( { content : value } )
                break;
            case "BACKGROUND_COLOR" :
                this.setState( { backgroundColor : value } )
                break;
            case "TEXT_COLOR" :
                this.setState( { textColor : value } )
                break;
            case "FONT_SIZE" :
                this.setState( { fontSize : value } )
                break;
            case "TEXT_ALIGN" :
                this.setState( { align : value } )
                break;
            default:
                return;
        };
        setTimeout(() => {
            return this.props.changeState(this.state, this.props.index);
        }, 0)
    }

    render(){
        return (
            <div className="paragraph">
                <div className="card">
                    <div className="card-body">
                    <span className='pull-right cross' onClick={() => this.props.removeField(this.props.index)}>x</span>
                    <div className="form-group">
                        <textarea id="paragraph" value={this.state.content} onChange={(e) => this.changeValue("CONTENT", e.target.value)} className='form-control'/>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Paragraph;