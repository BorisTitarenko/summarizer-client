import React from 'react';
import Logout from './Logout';
import {useAuth} from './AuthContext'
import { Avatar, AppBar, Toolbar, Typography } from '@material-ui/core';

function UserPanel() {
    const auth = useAuth();


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