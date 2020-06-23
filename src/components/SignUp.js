import React, {useState} from "react";
import {useHistory} from 'react-router-dom';
import Columns from "react-bulma-components/lib/components/columns";
import {Control, Input, Label} from "react-bulma-components/lib/components/form";
import Button from "react-bulma-components/lib/components/button";
import {registerUser} from "../firebase/auth";
import Content from "react-bulma-components/lib/components/content";
import Notification from "react-bulma-components/lib/components/notification";


const SignUp = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState(false);

    let history = useHistory()

    const signUpUser = async (e) => {
        e.preventDefault()
        let user = await registerUser(email, password);

        if (!user.uid) {
            setError(user.message)
        } else {
            history.push("/profile")
        }

    }


    return (
        <Columns mobile>
            <Columns.Column size="half" offset="one-quarter" style={{marginTop: 32}}>
                <Content>
                    <h1>Sign Up</h1>
                </Content>
                <Columns.Column>
                    {error && <Notification color="danger">
                        Lorem ipsum dolor sit amet, consectetur
                        <Button remove/> </Notification>}
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
                        onClick={signUpUser}
                    >
                        Sign Up
                    </Button>
                </Columns.Column>
            </Columns.Column>
        </Columns>
    )
}

export default SignUp