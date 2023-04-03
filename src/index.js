import locationFinder from "./locationFinder.js";

const testFunction = (city) => {
   return locationFinder(city);
}

module.exports = { testFunction };