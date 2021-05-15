import React, {useContext} from "react";
import firebase from 'firebase';

import {Context} from '../index';
import {Button, Container, Grid, Box} from "@material-ui/core";

const Login = () => {
    const {auth} = useContext(Context);
    const loginHandler = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        const {user} = await auth.signInWithPopup(provider);
        console.log(user);
    };

    return (
        <Container>
            <Grid container
                style={{
                    height: window.innerHeight - 50,
                    alignItems: "center",
                    justifyContent: "center"
                }} 
            >
                <Grid container
                    style={{
                        width: 400,
                        borderRadius: 4,
                        background: 'lightgray',
                        alignItems: "center",
                        justifyContent: "center",
                        direction: "column"
                    }}
                >
                    <Box p={5}>
                        <Button onClick={loginHandler} variant="outlined">Login with Google</Button>
                    </Box>
                </Grid>
                    
            </Grid>
        </Container>
    );
}
export default Login;