import React, {useState} from "react";
import Columns from "react-bulma-components/lib/components/columns";
import {Control, Input, Label} from "react-bulma-components/lib/components/form";
import Button from "react-bulma-components/lib/components/button";
import {loginUser} from "../firebase/auth";
import Content from "react-bulma-components/lib/components/content";
import Notification from "react-bulma-components/lib/components/notification";


const Login = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error,setError]=useState();

    const signInUser = async (e) => {
        e.preventDefault()
        let user=await loginUser(email,password);

        if (!user.id){
            setError(user.message)
        }

    }



    return (
        <Columns mobile>
            <Columns.Column size="half" offset="one-quarter" style={{marginTop:32}}>
                <Content>
                    <h1>Login</h1>
                </Content>
                <Columns.Column>
                    <Control>
                        {error && <Notification color="danger">
                            {error}
                            <Button remove/> </Notification>}
                        <Label>Email Address</Label>
                        <Input
                            placeholder="Enter email"
                            type="email" style={{marginBottom: 8}}
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </Control>
                    <Control>
                        <Label>Password</Label>
                        <Input
                            placeholder="Enter password"
                            type="password" value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </Control>
                    <br/>
                    <Button
                        color="info"
                        type="submit"
                        styles={{padding: 8}}
                        onClick={signInUser}
                    >
                        Login
                    </Button>
                </Columns.Column>
            </Columns.Column>
        </Columns>
    )
}

export default Login