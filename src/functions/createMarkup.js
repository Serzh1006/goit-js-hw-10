export function createMarkup(data) {
  if (data.length === 1) {
    return data.reduce((markup, obj) => {
      return (
        markup +
        `<img src="${obj.flags.svg}" alt="${
          obj.flags.alt
        }" width="40" height="30"/> 
				<h2>${obj.name.official}</h2> <p>Capital:${obj.capital}</p> <p>Population:${
          obj.population
        }</p> <p>Languages:${Object.values(obj.languages)}</p>`
      );
    }, '');
  }
}

export function createListMarkup(listObj) {
  return listObj.reduce((markup, obj) => {
    return (
      markup +
      `<li><img src="${obj.flags.svg}" alt="${obj.flags.alt}" width="40" height="30"/> ${obj.name.official}</li>`
    );
  }, '');
}
