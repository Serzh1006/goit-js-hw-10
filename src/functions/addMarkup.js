import { refs } from './refs';

export function addMarkupInDiv(markup) {
  refs.countryInfo.innerHTML = markup;
}

export function addMarkupInList(markup) {
  refs.countryList.innerHTML = markup;
}
