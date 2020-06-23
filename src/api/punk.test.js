import {getBeers} from './punk'
import axios from 'axios'
import {punkModel} from "./punkmodel";

jest.mock('axios')

describe('getBeers', function () {
    it('should successfully fetch data from API', async function () {
        const data = {data: punkModel}
        axios.get.mockImplementationOnce(() => Promise.resolve(data))
    });
    it('should erroneously fetch data from API', function () {
        const errorMessage = "Network Error"
        axios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)))
    });
});