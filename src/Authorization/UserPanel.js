import React from 'react';
import Logout from './Logout';
import {useAuth} from './AuthContext'
import { Avatar, AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    bar : {
        backgroundColor: 'rgb(255,215,0)'
    },
    avatar : {
        margin: 20,
        float: 'right',
        position: 'relative'
    }
}));

const logoutStyling = {
    position: 'absolute',
    right: 20
}

function UserPanel() {
    const auth = useAuth();
    const classes = useStyles();

    return auth.user ? (
        <AppBar position="static" className={classes.bar}>
            <Toolbar>
                <Typography variant="h6" >
                {auth.user.name}
                </Typography>
                <Avatar src={auth.user.imageUrl} className={classes.avatar}/>
                <div style={logoutStyling}>
                    <Logout/>
                </div>
            </Toolbar>
        </AppBar>
    ) : (<p>You are not logged in.</p>)
}

export default UserPanel;