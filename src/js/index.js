console.log('Connected!');

import { elements } from './views/base';
import * as searchView from './views/searchView';
import Search from './models/Search';

const state = {};

/** Control search bar */
elements.searchBar.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
})

const controlSearch = async () => {
    const query = searchView.getInput()

    if(query) {
        state.search = new Search(query);
        searchView.clearInput();
        try {
            await state.search.getResult();
            elements.body.classList.add('open');
            elements.paragraph.classList.add('hide');
            searchView.renderResult(state.search.results);
        } catch(error) {
            alert('ControlSearch error');
        }
    }
}
/** Control search bar end */

/** Control cancel button */
elements.searchBar.addEventListener('click', e => {
    elements.searchBar.classList.add('clicked');
    elements.txtBar.classList.add('txtClicked')
    elements.cancelbtn.forEach(e => {
        e.classList.add('open');
    })
    if(e.target.closest('.a') || e.target.closest('.b') || e.target.closest('.c')){
        elements.searchBar.classList.remove('clicked');
        elements.txtBar.classList.remove('txtClicked');
        elements.cancelbtn.forEach(e => {
            e.classList.remove('open');
        })
        
        searchView.clearSearch();
        state.search = '';
    }
})
/** Control cancel button end */
