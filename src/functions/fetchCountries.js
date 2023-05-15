import { clearContent } from './clearContent';

export function fetchCountries(nameCountry) {
  return fetch(
    `https://restcountries.com/v3.1/name/${nameCountry}?fields=name,capital,population,flags,languages`
  ).then(r => {
    if (!r.ok) {
      clearContent();
      throw new Error(r.status);
    } else {
      return r.json();
    }
  });
}
