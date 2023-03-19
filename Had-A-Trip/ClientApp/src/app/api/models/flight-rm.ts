/* tslint:disable */
/* eslint-disable */
import { TimePlaceRm } from './time-place-rm';
export interface FlightRm {
  airline?: null | string;
  arrival?: TimePlaceRm;
  departure?: TimePlaceRm;
  id?: null | string;
  price?: null | string;
  remainingSeats?: number;
}
