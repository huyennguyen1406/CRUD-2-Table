import {National} from "./national";

export interface City {
  id?: number;
  name?: string;
  area?: number;
  population?: number;
  gdp?: number;
  description?: string;
  national?: National;
}
