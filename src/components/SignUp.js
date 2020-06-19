import React, {useState} from "react";
import Columns from "react-bulma-components/lib/components/columns";
import {Control, Input, Label} from "react-bulma-components/lib/components/form";
import Button from "react-bulma-components/lib/components/button";
import {registerUser} from "../firebase/auth";


const SignUp = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const signUpUser = async (e) => {
        e.preventDefault()
       let user=await registerUser(email,password);
        console.log(user)
    }



    return (
        <Columns mobile>
            <Columns.Column size="half" offset="one-quarter" style={{marginTop:32}}>
                <h1>Sign Up</h1>
                <Columns.Column>
                    <Control>
                        <Label>Email Address</Label>
                        <Input
                            placeholder="Enter beer name"
                            type="email" style={{marginBottom: 8}}
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </Control>
                    <Control>
                        <Label>Password</Label>
                        <Input
                            placeholder="Enter beer name"
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