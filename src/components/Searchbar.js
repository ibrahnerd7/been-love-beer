import React from "react";
import {
  Control,
  Input,
} from "react-bulma-components/lib/components/form";
import Button from 'react-bulma-components/lib/components/button';
import Columns from 'react-bulma-components/lib/components/columns';

const Searchbar = () => {
  return (
  
     <Columns style={{margin:16}}>
      <Columns.Column size={4}>
      <Control>
        <Input placeholder="Text input" readOnly />
      </Control>
      </Columns.Column>
      <Columns.Column >
      <Button
        color="info"
      >
        Search
      </Button>
      </Columns.Column>
      </Columns>
     
  );
};

export default Searchbar;
