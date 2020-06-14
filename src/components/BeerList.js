import React,{useState,useEffect} from 'react'
import Container from 'react-bulma-components/lib/components/container';
import Section from 'react-bulma-components/lib/components/section';
import Columns from 'react-bulma-components/lib/components/columns';
import BeerCard from '../containers/BeerCard'
import axios from 'axios'

const BeerList=()=>{
   const [beers,setBeers]=useState([])

   useEffect(()=>{
       const fetchBeer=async()=>{
        const response= await axios("https://api.punkapi.com/v2/beers")
         setBeers(response.data)
       }
       fetchBeer()
      
   },[]);

    return(
    <Section>
        <Container>
        <Columns>
        {beers && beers.map(beer=>(
          <BeerCard beer={beer}  key={beer.id}/>
        ))}
          </Columns>
        </Container>
      
      </Section>
    )
}

export default BeerList;