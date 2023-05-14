import './css/styles.css';
import { fetchCountries } from './functions/fetchCountries';
import { refs } from './functions/refs';
import { addMarkupInDiv } from './functions/addMarkup';
import { addMarkupInList } from './functions/addMarkup';
const debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;

refs.input.addEventListener(
  'input',
  debounce(e => {
    const nameCountry = e.target.value.trim();
    if (nameCountry === '') {
      addMarkupInDiv('');
      addMarkupInList('');
    } else {
      fetchCountries(nameCountry);
    }
  }, DEBOUNCE_DELAY)
);
