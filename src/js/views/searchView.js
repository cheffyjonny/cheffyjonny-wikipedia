import { elements } from './base';

export const getInput = () => elements.searchInput.value;

export const clearInput = () => elements.searchInput.value = '';

export const renderSearch = result => {
    const markup = `
        <a href="https://en.wikipedia.org/?curid=${result.pageid}" class="serach-result" target="_blank">
            <li>
                <h1 class="result-title">${result.title}</h1>
                <p class="result-body">${result.extract}</p>
            </li>
        </a>
    `
    elements.searchResult.insertAdjacentHTML('beforeend', markup);
};

export const clearSearch = () => {
    elements.searchResult.classList.add('deleted');
    setTimeout(() => {
        elements.searchResult.innerHTML = '';
        elements.searchResult.classList.remove('deleted');
        elements.body.classList.remove('open');
        elements.paragraph.classList.remove('hide');
    }, 700)


};

export const renderResult = results => {
    Object.keys(results).forEach(key => {
        renderSearch(results[key]);
    })
};
