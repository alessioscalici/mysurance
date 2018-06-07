// @flow

import get from 'lodash/get';
import { setCategories } from './actions';


export const fetchCategories = () => (dispatch : Function) => {
  return fetch('https://en.wikipedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:Types_of_insurance&cmtype=subcat&format=json&origin=*')
    .then(response => {
      if (response.ok) {
        return response.json().then((json) => {
          const categories = get(json, 'query.categorymembers', [])
            .map(item => ({ id: item.pageid, title: item.title.replace('Category:', '') }));
          dispatch(setCategories(categories));
        });
      }
    });
};
