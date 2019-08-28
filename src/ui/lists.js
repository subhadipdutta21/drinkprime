import React, { Component } from 'react';
import {Table,TableBody,TableHead,TableCell,Typography,Paper,TextField,Button,TableRow,Dialog,AppBar,Toolbar,IconButton,Tooltip} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';

class Lists extends Component {
    state = { 
        detailView : false,
        name:'',
        mobile:'',
        email:'',
        address:'',
        area:''
     }
    render() { 
        // console.log(this.props)
        const {projects} = this.props
        return ( 
            <React.Fragment >
                <Typography variant='h5'>
                    New Leads
                </Typography>
                <Paper style={{marginTop:10, width:'93%'}} elevation={5}>
                    <Table>
                        <TableHead>
                        <TableRow>
                            <TableCell>LeadId</TableCell>
                            <TableCell >Name</TableCell>
                            <TableCell>EnquiryDate</TableCell>
                            <TableCell>Mobile</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>                        
                        { projects && projects.map(row => (
                         <Tooltip title="Click to see detail view" placement="right"> 
                          <TableRow key={row.id}                            
                          hover
                          onClick={()=>this.setState({detailView : true,name: row.name, mobile:row.mobile,email:row.email,address:row.address,area:row.area})}
                          >
                            <TableCell component="th" scope="row">
                              {row.id}
                            </TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.created}</TableCell>
                            <TableCell>{row.mobile}</TableCell>
                          </TableRow>
                          </Tooltip>
                        ))}
                        
                      </TableBody>
                    </Table>
                </Paper>

                <Dialog fullScreen open={this.state.detailView} >
                    <AppBar>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={()=>this.setState({detailView:false})} aria-label="close">
                        <CloseIcon />
                        </IconButton>
                        <Typography variant="h6">
                        New Lead Information
                        </Typography>
                    </Toolbar>
                    </AppBar>
                        <div style={{paddingTop:'4%',paddingLeft:'5%'}}>
                            <TextField
                            disabled
                            id="standard-disabled"
                            label="Name"
                            defaultValue={this.state.name}        
                            margin="normal"
                          /> 
                          <br />
                          <TextField
                            disabled
                            id="standard-disabled"
                            label="Mobile"
                            defaultValue={this.state.mobile}        
                            margin="normal"
                          />
                          <br />
                          <TextField
                            disabled
                            id="standard-disabled"
                            label="Email"
                            defaultValue={this.state.email}        
                            margin="normal"
                            style={{width:"30%"}}
                          />
                          <br />
                          <TextField
                            disabled
                            id="standard-disabled"
                            label="Address"
                            defaultValue={this.state.address}        
                            margin="normal"
                            style={{width:"30%"}}
                          />
                          <br />
                          <TextField
                            disabled
                            id="standard-disabled"
                            label="Area"
                            defaultValue={this.state.area}        
                            margin="normal"
                          />
                        
                          <br />
                          <Button variant="contained" color="primary" style={{ textTransform : 'none',marginLeft:'27%',marginTop:'3%'}}
                          onClick={()=>this.setState({detailView:false})}
                          >
                          Back
                          </Button>
                        </div>

        
                 </Dialog>
            </React.Fragment>
         );
    }
}

const mapStateToProps = state => {
    // console.log(state)
    return {
        projects : state.firestore.ordered.projects
    }
}


 
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'projects'}
    ])
)(Lists);