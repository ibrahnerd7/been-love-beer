import React, {useContext, useState} from "react";
import Content from "react-bulma-components/lib/components/content";
import Columns from "react-bulma-components/lib/components/columns";
import {Control, Input, Label} from "react-bulma-components/lib/components/form";
import Button from "react-bulma-components/lib/components/button";
import {UserContext} from "../providers/UserProvider";
import Image from "react-bulma-components/lib/components/image";
import {updateUser} from "../firebase/auth";

const Profile = () => {
    const user = useContext(UserContext)
    const {photoUrl, displayName, email} = user
    const [imageSrc, setImageSrc] = useState(photoUrl)
    const [userName, setUserName] = useState(displayName)

    let fileInput = React.createRef()
    const handleSubmit = async () => {
        let response = await updateUser(userName, imageSrc)
        console.log(await response)
    };

    const onChooseImage = () => {
        let file = fileInput.current.files[0]
        let reader = new FileReader();
        let url = reader.readAsDataURL(file)

        reader.onloadend = (e) => {
            setImageSrc(e.currentTarget.result)
        }
    }

    return (
        <Columns mobile={true}>
            <Columns.Column size="half" offset="one-quarter" style={{marginTop: 32}}>
                <Content>
                    <h1>Profile</h1>
                </Content>
                <Columns.Column>
                    <div style={{width: 100}}>
                        <Image
                            rounded
                            src={imageSrc}
                            size={64}
                            alt="user image"/>
                    </div>
                    <br/>
                    <Control>
                        <Label>Change photo</Label>
                        <input
                            placeholder="Enter email"
                            style={{marginBottom: 8}}
                            type="file"
                            ref={fileInput}
                            value={undefined}
                            onChange={onChooseImage}
                        />
                    </Control>
                    <br/>
                    <Control>
                        <Label>Email Address</Label>
                        <Input
                            placeholder="Enter email"
                            type="email" style={{marginBottom: 8}}
                            value={email}
                            readOnly
                        />
                    </Control>
                    <br/>
                    <Control>
                        <Label>Display Name</Label>
                        <Input
                            placeholder="Enter display name"
                            type="text"
                            value={userName ?userName :""}
                            onChange={event => setUserName(event.target.value)}
                        />
                    </Control>
                    <br/>
                    <Button
                        color="info"
                        type="submit"
                        styles={{padding: 8}}
                        onClick={handleSubmit}
                    >
                        Update
                    </Button>
                </Columns.Column>
            </Columns.Column>
        </Columns>
    )
}

export default Profile