import { createMarkup } from './createMarkup';
import { addMarkupInDiv } from './addMarkup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { createListMarkup } from './createMarkup';
import { addMarkupInList } from './addMarkup';

export function fetchCountries(nameCountry) {
  fetch(
    `https://restcountries.com/v3.1/name/${nameCountry}?fields=name,capital,population,flags,languages`
  )
    .then(responce => {
      if (!responce.ok) {
        addMarkupInDiv('');
        addMarkupInList('');
        throw new Error(responce.status);
      } else {
        return responce.json();
      }
    })
    .then(data => {
      if (data.length > 10) {
        addMarkupInDiv('');
        addMarkupInList('');
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
      Notify.failure('Oops, there is no country with that name');
    });
}
