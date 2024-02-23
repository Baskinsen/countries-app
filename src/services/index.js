export default function getNeigbs(Country) {
  let neighbs = [];
  console.log(Country.name);
  for (let countries of data) {
    if (Country.borders.includes(countries.alpha3Code)) {
      neighbs = [...neighbs, countries.name];
    }
  }
  return neighbs;
}
