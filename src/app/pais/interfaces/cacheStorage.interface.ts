import { Country } from "./pais.interface"

export interface cacheStore {
  byCapital:searchTerm,
  byCountry:searchTerm,
  byRegion:searchTerm,
}

interface searchTerm{
  term: string,
  countries: Country[]
}
