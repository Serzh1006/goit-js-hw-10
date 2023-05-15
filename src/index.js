import './css/styles.css';
import { fetchCountries } from './functions/fetchCountries';
import { refs } from './functions/refs';
import { addMarkupInDiv } from './functions/addMarkup';
import { addMarkupInList } from './functions/addMarkup';
import { createListMarkup } from './functions/createMarkup';
import { createMarkup } from './functions/createMarkup';
import { clearContent } from './functions/clearContent';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;

refs.input.addEventListener(
  'input',
  debounce(e => {
    const nameCountry = e.target.value.trim();
    if (nameCountry === '') {
      clearContent();
    } else {
      fetchCountries(nameCountry)
        .then(data => {
          if (data.length > 10) {
            clearContent();
            Notify.info(
              'Too many matches found. Please enter a more specific name.'
            );
          } else if (data.length >= 2 && data.length <= 10) {
            addMarkupInDiv('');
            addMarkupInList(createListMarkup(data));
          } else {
            addMarkupInList('');
            addMarkupInDiv(createMarkup(data));
          }
        })
        .catch(error => {
          if (error.message === '404') {
            Notify.failure('Oops, there is no country with that name');
          }
        });
    }
  }, DEBOUNCE_DELAY)
);
