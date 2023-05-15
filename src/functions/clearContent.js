import { addMarkupInDiv } from './addMarkup';
import { addMarkupInList } from './addMarkup';

export function clearContent() {
  addMarkupInDiv('');
  addMarkupInList('');
}
