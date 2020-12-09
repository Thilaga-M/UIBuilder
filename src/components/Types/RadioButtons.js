import React, { Component } from 'react';
import * as _ from "lodash";

class RadioButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab : '',
            inline : false,
            multiple : false,
            toolType: "RADIO_BUTTONS",
            title : '',
            name : '',
            defaultValue : '',
            description : '',
            validation : {
                isReadOnly: false,
                isRequired: false,
                min : 6,
                max : 6
            },
            radios : [],
            duplicate : false
        }
        this.removeOption = this.removeOption.bind(this);
    }

    componentWillMount(){
        this.setState(this.props.field);
    }

    changeValue(stateFor, value){
        switch (stateFor){
            case "NAME" :
                this.setState( { name : value } )
                break;
            case "TITLE" :
                this.setState( { title : value } )
                break;
            case "DESCRIPTION" :
                this.setState( { description : value } )
                break;
            case "DEFAULT_VALUE" :
                this.setState( { defaultValue : value } )
                break;
            case "IS_REQUIRED" :
                this.setState( { validation : { ...this.state.validation, isRequired : value }})
                break;
            case "IS_READONLY" :
                this.setState( { validation : { ...this.state.validation, isReadOnly : value }})
                break;
            case "MAX" :
                this.setState( { validation : { ...this.state.validation, max : value }})
                break;
            case "MIN" :
                this.setState( { validation : { ...this.state.validation, min : value }})
                break;
            case "INLINE" :
                this.setState( { inline : value } )
                break;
            case "MULTIPLE" :
                this.setState( { multiple : value } )
                break;
            default:
                return;
        };
        setTimeout(() => {
            return this.props.changeState(this.state, this.props.index);
        }, 0)
    }

    removeOption(index){
        let radios = this.state.radios;
        radios.splice(index,  1);
        this.setState({
            radios : radios
        });
        this.duplicates();
        setTimeout(() => {
            return this.props.changeState(this.state, this.props.index);
        }, 0)
    }

    render(){
        return(
            <div className="card card-outline-primary">
                <div className="card-body">
                <span className='pull-right cross' onClick={() => this.props.removeField(this.props.index)}>x</span>
                <div className="form-check-inline">
                    <input
                        value={this.state.multiple}
                        onChange={(e) => this.changeValue("MULTIPLE", e.target.checked)}
                        className="form-check-input" type="checkbox" id="multiple" />
                    <label className="form-check-label" htmlFor="isRequired">
                        Multiple Selection
                    </label>
                </div>
                <div className="form-check-inline">
                    <input
                        value={this.state.inline}
                        onChange={(e) => this.changeValue("INLINE", e.target.checked)}
                        className="form-check-input" type="checkbox" id="inLine" />
                    <label className="form-check-label" htmlFor="inLine">
                        Inline
                    </label>
                </div>
                   
                </div>
            </div>
        )
    }

    changeOptionValue(index, value, state){
        let radios = this.state.radios;
        let radio = {};
        if(state === "DEFAULT_VALUE"){
            this.setState({
                defaultValue : index
            })
        }
        if(state === "TITLE"){
            radio = {
                ...radios[index],
                title: value,
            }
        }else if(state === 'SELECTED'){
            radio = {
                ...radios[index],
                selected: !radios[index].selected
            }
        }else if(state === 'VALUE'){
            radio = {
                ...radios[index],
                value : value
            }
        }else{
            radio = {
                ...radios[index]
            }
        }

        radios[index] = radio;
        this.setState({
            radios : radios
        });
        this.duplicates();
        setTimeout(() => {
            return this.props.changeState(this.state, this.props.index);
        }, 0)
    }

    duplicates(){
        let radios = this.state.radios;
        let u = _.uniqBy(radios, 'value');
        if(!_.isEqual(radios, u)){
            this.setState({
                duplicate: true
            });
        }else{
            this.setState({
                duplicate: false
            });
        }
    }

    addOption(){
        let radio = {
            title : '',
            value : '',
            selected: false
        }
        let radios = this.state.radios;
        radios.push(radio)
        this.setState({
            radios : radios
        });
        this.duplicates();
        setTimeout(() => {
            return this.props.changeState(this.state, this.props.index);
        }, 0)
    }
}

export default RadioButtons;