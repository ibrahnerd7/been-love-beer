import React, {useState, useEffect} from 'react';
import Container from 'react-bulma-components/lib/components/container';
import Section from 'react-bulma-components/lib/components/section';
import Columns from 'react-bulma-components/lib/components/columns';
import BeerCard from '../containers/BeerCard';
import Searchbar from "./Searchbar";
import {getBeers} from "../api/punk";

const BeerList = () => {
    const [beers, setBeers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("punk");

    useEffect(() => {
        const fetchBeer = async () => {
            console.log(searchTerm)
            const response = await getBeers(searchTerm)
            setBeers(response);
            return response;
        };
        fetchBeer().then(r => console.log(r));
    }, [searchTerm]);

    return (
        <Section>
            <Container>
                <Searchbar submitSearch={(text) => setSearchTerm(text)}/>
                <Columns>
                    {beers && beers.map((beer) => <BeerCard beer={beer} key={beer.id}/>)}
                </Columns>
            </Container>
        </Section>
    );
};

export default BeerList;
