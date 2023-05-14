import { createMarkup } from './createMarkup';
import { addMarkupInDiv } from './addMarkup';
import { Notify } from 'notiflix';
import { createListMarkup } from './createMarkup';
import { addMarkupInList } from './addMarkup';
export function fetchCountries(nameCountry) {
  fetch(
    `https://restcountries.com/v3.1/name/${nameCountry}?fields=name,capital,population,flags,languages`
  )
    .then(r => r.json())
    .then(data => {
      if (data.length > 10) {
        throw new Error('error');
      } else if (data.length >= 2 && data.length <= 10) {
        addMarkupInList(createListMarkup(data));
      } else {
        addMarkupInDiv(createMarkup(data));
      }
    })
    .catch(error =>
      Notify.info('Too many matches found. Please enter a more specific name.')
    );
}
