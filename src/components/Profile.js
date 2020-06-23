import React from "react";
import Content from "react-bulma-components/lib/components/content";
import Columns from "react-bulma-components/lib/components/columns";
import {Control, Input, Label} from "react-bulma-components/lib/components/form";
import Button from "react-bulma-components/lib/components/button";

const Profile = () => {
    return (
        <Columns mobile>
            <Columns.Column size="half" offset="one-quarter" style={{marginTop: 32}}>
                <Content>
                    <h1>Profile</h1>
                </Content>
                <Columns.Column>
                    <Control>
                        <Label>Email Address</Label>
                        <Input
                            placeholder="Enter email"
                            type="email" style={{marginBottom: 8}}
                        />
                    </Control>
                    <Control>
                        <Label>Password</Label>
                        <Input
                            placeholder="Enter password"
                            type="password"
                        />
                    </Control>
                    <br/>
                    <Button
                        color="info"
                        type="submit"
                        styles={{padding: 8}}
                    >
                        Update
                    </Button>
                </Columns.Column>
            </Columns.Column>
        </Columns>
    )
}

export default Profile