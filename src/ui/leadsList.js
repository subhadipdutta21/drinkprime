import React, { Component } from 'react';
import {AppBar,Toolbar,IconButton,Typography,Drawer,Tooltip,List,ListItem,ListItemIcon,ListItemText} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Lists from './lists';
import PowerSettingsNew from '@material-ui/icons/PowerSettingsNew';
import {connect} from 'react-redux';
import {signOut} from '../store/actions/authActions'
import CreateLead from './createLead';
import Login from './loginPage'


class LeadsList extends Component {
    state = { 
        drawer : false,
        direction:'ltr',
        comp:'New leads'
     }
    render() { 
      // console.log(this.props)
      if(!this.props.auth.uid) return <Login />
        return ( 
            <React.Fragment>
            <AppBar position="fixed">
                <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={()=>this.setState({drawer : true})}
                    edge="start"
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" style={{paddingLeft: this.state.drawer ? 200 : 20, flexGrow:1}}>
                    DrinkPrime
                </Typography>
                <Tooltip title="Logout" placement="bottom">            
                <IconButton onClick={this.props.signOut}>
                  <PowerSettingsNew style={{color:'white'}} />
                </IconButton>
                </Tooltip>
                </Toolbar>
            </AppBar>

            <Drawer variant="persistent" anchor="left" open={this.state.drawer}>
            <div>
              <IconButton onClick={()=>this.setState({drawer:false})} style={{float : 'right'}}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <ExpansionPanel style={{width:230,marginTop:0}}>
                <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                style={{marginTop:0}}
                >
                <Typography >Sales</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <List>
                {['New leads', 'Create new lead'].map((text, index) => (
                  <ListItem button key={text} onClick={()=>this.setState({comp : text})} style={{paddingBottom:5, paddingLeft:0,paddingRight:0}}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <InboxIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
                </ExpansionPanelDetails>
            </ExpansionPanel>          
          </Drawer>
          <div style={{paddingTop:'4%',paddingLeft: this.state.drawer ? '13%' :'4%'}}>
             {this.state.comp === 'New leads' ? <Lists /> : <CreateLead />}             
          </div>
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
    signOut : ()=> dispatch(signOut())
  }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(LeadsList);


