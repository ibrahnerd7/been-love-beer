import React from 'react'
import Columns from "react-bulma-components/lib/components/columns";
import Content from "react-bulma-components/lib/components/content";


const Profile = () => {
    return (
        <Columns mobile>
            <Columns.Column size="half" offset="one-quarter" style={{marginTop: 32}}>
                <Content>
                    <h1>Login</h1>
                </Content>
            </Columns.Column>
        </Columns>
    )
}

export default Profile;