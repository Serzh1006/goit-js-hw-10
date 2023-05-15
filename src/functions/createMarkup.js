export function createMarkup(data) {
  return data.reduce((markup, obj) => {
    return (
      markup +
      `<img src="${obj.flags.svg}" alt="${
        obj.flags.alt
      }" width="40" height="30"/> 
				<h2 class="country-Style">${
          obj.name.official
        }</h2> <p class="info"><span class="text-title">Capital:</span> ${
        obj.capital
      }</p> <p class="info"><span class="text-title">Population:</span> ${
        obj.population
      }</p> <p class="info"><span class="text-title">Languages:</span> ${Object.values(
        obj.languages
      )}</p>`
    );
  }, '');
}

export function createListMarkup(listObj) {
  return listObj.reduce((markup, obj) => {
    return (
      markup +
      `<li><img src="${obj.flags.svg}" alt="${obj.flags.alt}"
			 width="40" height="30"/> <p class="list-text">${obj.name.official}</p></li>`
    );
  }, '');
}
