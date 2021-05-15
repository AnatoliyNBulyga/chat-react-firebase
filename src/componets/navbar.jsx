import React, {useContext} from "react";
import {NavLink} from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import {Toolbar, Grid, Button} from '@material-ui/core';
import {LOGIN_ROUTE} from "../utils/const";
import {useAuthState} from "react-firebase-hooks/auth";
import {Context} from "../index";

const Navbar = () => {
    const {auth} = useContext(Context);
    const [user] = useAuthState(auth);
    const logoutHandler = () => auth.signOut();
    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <Grid container justify={"flex-end"}>
                    {
                        user
                        ? <Button onClick={logoutHandler} variant="outlined" color="inherit">Log out</Button>
                        : 
                        <NavLink to={LOGIN_ROUTE}><Button variant="outlined" color="inherit">Log in</Button></NavLink>
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    );
}
export default Navbar;