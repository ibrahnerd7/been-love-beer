import React, {useState} from 'react';
import {
    Control,
    Input,
} from 'react-bulma-components/lib/components/form';
import Button from 'react-bulma-components/lib/components/button';
import Columns from 'react-bulma-components/lib/components/columns';

const Searchbar = ({submitSearch}) => {
    const [text, setText] = useState();
    const submitSearchTerm = (e) => {
        e.preventDefault()
        submitSearch(text)
    }

    return (
        <Columns style={{margin: 16}}>
            <Columns.Column size={4}>
                <Control>
                    <Input placeholder="Enter beer name" onChange={e => setText(e.target.value)} value={text}/>
                </Control>
            </Columns.Column>
            <Columns.Column>
                <Button
                    color="info"
                    type="submit"
                    onClick={submitSearchTerm}
                >
                    Search
                </Button>
            </Columns.Column>
        </Columns>
    )

}

export default Searchbar;
