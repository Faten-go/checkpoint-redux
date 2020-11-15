import React, {Component} from 'react'
import { InputGroup, Button, InputGroupAddon, Input } from 'reactstrap';

class AddTask extends Component{
    state={
        content:''
    }
    handleChange = (e) =>{
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit=(e) => {
        e.preventDefault();
     console.log('form subbmited')   
    }
    render (){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                
            
                <InputGroup>
                    <Input />
                    <InputGroupAddon addonType="append">
                        
                        <InputGroupAddon addonType="append"><Button color="secondary" type="submit">OK</Button></InputGroupAddon>
                    </InputGroupAddon>
                </InputGroup>
                </form>
            </div>
        )
    }
}
export default AddTask;