import React from 'react';
import Card from 'react-bulma-components/lib/components/card';
import Media from 'react-bulma-components/lib/components/media';
import Image from 'react-bulma-components/lib/components/image';
import Content from 'react-bulma-components/lib/components/content';
import Heading from 'react-bulma-components/lib/components/heading';
import Columns from 'react-bulma-components/lib/components/columns';
import Icon from 'react-bulma-components/lib/components/icon';

const BeerCard=({beer})=>{
    return(
    
        <Columns.Column size={3} style={{margin:16}}>
        <Card >
        <Card.Content style={{margin:4}}>
          <Media>
            <Media.Item renderAs="figure" position="left">
              <Image size={32} alt="64x64" src={beer.image_url}/>
            </Media.Item>
            <Media.Item>
    <Heading size={4} style={{
                  overflow: "hidden",
                  whiteSpace: "normal", 
   
 /* Exactly 2 lines are displayed.  
     Height of 1 line is 1.2em*/ 
 height:"1.2em", 
    }}>{beer.name} </Heading>
<div>
        <Icon>
          <span className="fas fa-home" />
        </Icon>
      </div>
              <p  style={{marginStart:16, 
                       overflow: "hidden",
                     whiteSpace: "normal", 
      
    /* Exactly 2 lines are displayed.  
        Height of 1 line is 1.2em*/ 
    height:"4.6em", 
    textOverflow: "-o-ellipsis-lastline" }}>
    {beer.description}</p>
            </Media.Item>
          </Media>
          <Content>
        
          </Content>
        </Card.Content>
      </Card>
      </Columns.Column >
    
    )
}

export default BeerCard