import React, {useState} from "react";
import Columns from "react-bulma-components/lib/components/columns";
import {Control, Input, Label} from "react-bulma-components/lib/components/form";
import Button from "react-bulma-components/lib/components/button";
import {loginUser} from "../firebase/auth";
import Content from "react-bulma-components/lib/components/content";


const Login = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const signInUser = async (e) => {
        e.preventDefault()
        let user=await loginUser(email,password);
        console.log(user)
    }



    return (
        <Columns mobile>
            <Columns.Column size="half" offset="one-quarter" style={{marginTop:32}}>
                <Content>
                    <h1>Sign Up</h1>
                </Content>
                <Columns.Column>
                    <Control>
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
                        Sign Up
                    </Button>
                </Columns.Column>
            </Columns.Column>
        </Columns>
    )
}

export default Login