
const fetchService = (baseUrl, urls, method) => fetch(`${baseUrl}${urls}`, {method: `${method.toUpperCase()}`});

export {fetchService};