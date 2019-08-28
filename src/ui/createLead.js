import React, { Component } from 'react';
import {Typography,TextField,Paper,Button,Input} from '@material-ui/core';
import {createProject} from '../store/actions/projectActions';
import {connect} from 'react-redux'


class CreateLead extends Component {
    state = { 
        name:'',
        address:'',
        email:'',
        mobile:'',
        area:'',
        showButton: false
     }

     handleChange =(e) => {
         this.setState({
             [e.target.id] : e.target.value
         })
     }

     handleSubmit = ()=> {
         this.setState({showButton : true})
         this.props.createProject(this.state)
     }
    render() { 
        return ( 
            <React.Fragment>
                <Typography variant='h5'> Lead Information</Typography>
                <div>
                <Input
                    id='name'
                    placeholder="Name"
                    inputProps={{
                    'aria-label': 'description',
                    }}
                    style={{margin:20}}
                    onChange={(e)=>this.handleChange(e)}
              />
                <Input
                    id='address'
                    placeholder="Address"
                    inputProps={{
                    'aria-label': 'description',
                    }}
                    style={{margin:20,width:'30%'}}
                    onChange={(e)=>this.handleChange(e)}
                />
                
               <br />
                <Input
                    id='mobile'
                    placeholder="Mobile"
                    inputProps={{
                        'aria-label': 'description',
                    }}
                    style={{margin:20}}
                    onChange={(e)=>this.handleChange(e)}
                />
                <Input
                    id='area'
                    placeholder="Area"
                    inputProps={{
                    'aria-label': 'description',
                    }}
                    style={{margin:20,width:'30%'}}
                    onChange={(e)=>this.handleChange(e)}
            />
                <br />
                <Input
                    id='email'
                    placeholder="Email"
                    inputProps={{
                    'aria-label': 'description',
                    }}
                    style={{margin:20}}
                    onChange={(e)=>this.handleChange(e)}
            /> <br />
            <Button variant="contained" color="primary" disabled={this.state.showButton} style={{ textTransform : 'none',marginLeft:'38%'}}
            onClick={()=>this.handleSubmit()}
            >
            Create Lead
            </Button>
                </div>
            </React.Fragment>
         );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createProject: project => dispatch(createProject(project))
    }
}
 
export default connect(null,mapDispatchToProps)(CreateLead);