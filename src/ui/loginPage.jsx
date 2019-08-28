import React, { Component } from 'react';
import {Typography,TextField,Paper,Button} from '@material-ui/core';
import {signIn} from '../store/actions/authActions'
import {connect} from 'react-redux'
import LeadsList from './leadsList'


class Login extends Component {
    state = {  
        username:'',
        password:''       
    }

    handleChange = (e)=> {
        this.setState({[e.target.id] : e.target.value})
    }
    handleSubmit = () => {
        // console.log(this.props)
        this.props.signIn(this.state)
    }

    render() { 
        // console.log(this.props)
        const {authError} = this.props;
        if(this.props.auth.uid) return <LeadsList />
        return ( 
            <React.Fragment>
            <Paper style={{width:"27%",marginLeft:'35%',marginTop:'10%',padding:10, background:'#FAFAFA', borderRadius:0}} elevation={5}>
                <TextField
                    id="username"
                    label="Email"
                    placeholder="Placeholder"
                    margin="normal"
                    style={{width:'100%'}}
                    onChange={(e)=>this.handleChange(e)}
                /> <br />
                <TextField
                    id="password"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                    style={{width:'100%'}}
                    onChange={(e)=>this.handleChange(e)}
                />
                <Button variant="contained" color="primary" style={{width:'100%', padding: 6,textTransform : 'none',marginTop:10,marginBottom:10, background:'green'}}
                onClick={()=>this.handleSubmit()}
                >
                    Login
                </Button>
                <div style={{color: 'red', textAlign:'center'}}>{authError ? authError+' !' : null}</div>            
            </Paper>                
            </React.Fragment>
         );
    }
}

const mapStateToProps = state => {
    return {
        authError : state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Login);