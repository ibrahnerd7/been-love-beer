import axios from 'axios';

//default api configuration
const punk = axios.create({
    baseURL: 'https://api.punkapi.com/v2',
});

//get beers
export const getBeers = async (searchTerm) => {
    try {
        return (await punk.get(`/beers?beer_name=${searchTerm}`)).data;
    } catch (error) {
        console.error(error)
    }
}

