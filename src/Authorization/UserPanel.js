import React from 'react';
import Logout from './Logout';
import {useAuth} from './AuthContext'
import { fade, makeStyles } from '@material-ui/core/styles';
import { Avatar, AppBar, Toolbar, Typography } from '@material-ui/core';

function UserPanel() {
    const auth = useAuth();

    const classes = {

    }

    return auth.user ? (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" >
                {auth.user.name}
                </Typography>
                <Avatar src={auth.user.imageUrl}/>
                <Logout/>
            </Toolbar>
        </AppBar>
    ) : (<p>You are not logged in.</p>)
}

export default UserPanel;