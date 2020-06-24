import React, {useState, useEffect} from 'react';
import Container from 'react-bulma-components/lib/components/container';
import Section from 'react-bulma-components/lib/components/section';
import Columns from 'react-bulma-components/lib/components/columns';
import BeerCard from '../containers/BeerCard';
import Searchbar from "./Searchbar";
import {getBeers} from "../api/punk";
import {Link} from "react-router-dom";
import Media from "react-bulma-components/lib/components/media";
import Card from "react-bulma-components/lib/components/card";

const BeerList = () => {
    const [beers, setBeers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("punk");
    let [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const fetchBeer = async () => {
            const response = await getBeers(searchTerm)
            setBeers(response);
            return response;
        };
        fetchBeer().then(r => console.log(1));
    }, [searchTerm]);

    const setLoggedIn = (loggedIn) => {
        setIsLoggedIn(loggedIn)
    }

    return (
        <Section>
            <Container>
                {isLoggedIn && <Columns size={1}>
                    <Card>
                        <Card.Content style={{margin: 4}}>
                            <Media>
                                <Media.Item>

                                    {<Link to="/login" style={{float: "right"}}>
                                        <u>Login</u> to save this beer
                                    </Link>}
                                </Media.Item>
                            </Media>
                        </Card.Content>
                    </Card>
                </Columns>}
                <Searchbar submitSearch={(text) => setSearchTerm(text)}/>
                <Columns>
                    {beers && beers.map((beer) =>
                        <BeerCard beer={beer} key={beer.id}
                                  setLoggedIn={(loggedIn) => setLoggedIn(loggedIn)}/>)}
                </Columns>

            </Container>
        </Section>
    );
};

export default BeerList;
