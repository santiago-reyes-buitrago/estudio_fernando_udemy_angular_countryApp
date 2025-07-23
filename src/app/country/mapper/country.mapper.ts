import {RestCountry} from '../interfaces/rest-countries.interface';
import {CountryInterface} from '../interfaces/country.interface';

export class CountryMapper {
  static mapRestCountryToCountry(item:RestCountry):CountryInterface{
    return {
      capital: item.capital,
      name: item.translations['spa'].common ?? 'N/A',
      population: item.population,
      cca2: item.cca2,
      flag: item.flag,
      flagPng: item.flags.svg,
      flagAlt: item.flags.alt,
      region: item.region,
      subRegion: item.subregion
    }
  }
  static mapRestCountrytoCountryArray(items: RestCountry[]):CountryInterface[]{
    return items.map(CountryMapper.mapRestCountryToCountry)
  }
}
