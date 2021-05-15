import React, {useContext} from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import {Context} from "../index";
import {Container, Grid, TextField, Button} from "@material-ui/core";

const Chat = () => {
    const {auth, firestore} = useContext(Context);
    const [loading] = useAuthState(auth);
    return (
        <Container>
            <Grid container 
                style={{
                    height: window.innerHeight - 50,
                    marginTop: 20,
                    justifyConten: "center"
                }} 
            ><div style={{width: '80%', height: '60vh', border: '1px solid gray', overflow: 'auto'}}> 
            </div>
            <Grid
                container
                direction={"column"}
                alignItems={"flex-end"}
                style={{width: "80%"}}
            >
                <TextField variant="outlined" />
                <Button variant="outlined">Submit</Button>
            </Grid>
            </Grid>
        </Container>
    );
}
export default Chat;