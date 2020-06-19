import React, { useState, useEffect } from 'react';
import Container from 'react-bulma-components/lib/components/container';
import Section from 'react-bulma-components/lib/components/section';
import Columns from 'react-bulma-components/lib/components/columns';
import axios from 'axios';
import BeerCard from '../containers/BeerCard';
import Searchbar from "./Searchbar";

const BeerList = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm,setSearchTerm]=useState("punk");

  useEffect(() => {
    const fetchBeer = async () => {
      const response = await axios(`https://api.punkapi.com/v2/beers?beer_name=${searchTerm}`);
      setBeers(response.data);
    };
    fetchBeer();
  }, [searchTerm]);

  return (
    <Section>
      <Container>
        <Searchbar submitSearch={(text)=>setSearchTerm(text)} />
        <Columns >
          {beers && beers.map((beer) => <BeerCard beer={beer} key={beer.id} />)}
        </Columns>
      </Container>
    </Section>
  );
};

export default BeerList;
