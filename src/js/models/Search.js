import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResult() {
        const api = `https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&prop=extracts&continue=gsroffset%7C%7C&generator=search&exsentences=1&exlimit=20&exintro=1&explaintext=1&gsrsearch=${this.query}&gsrlimit=10&gsroffset=10`
   
        try {
            const res = await axios(api);
            this.results = res.data.query.pages;

        } catch(error) {
            alert('GetResult error');
        }
    }
}
