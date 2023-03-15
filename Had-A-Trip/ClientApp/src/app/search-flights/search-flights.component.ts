import { Component } from '@angular/core';
//import { time } from 'console';

@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.css']
})
export class SearchFlightsComponent {
  searchFlights: FlightRm[] = [
    {
      airline: "Air India",
      arrival: { place: "Los Angeles", time: Date.now().toString() },
      departure: { place: "Istanbul", time: Date.now().toString() },
      price: "20000",
      remainingSeats: 500
    },
    {
      airline: "Etihad Airways", 
      arrival: { place: "New York", time: Date.now().toString() },
      departure: { place: "Dublin", time: Date.now().toString() },
      price: "35999",
      remainingSeats: 456
    },
    {
      airline: "Emirates Airlines",
      arrival: { place: "Portugal", time: Date.now().toString() },
      departure: { place: "Dubai", time: Date.now().toString() },
      price: "46989",
      remainingSeats: 345
    },
    {
      airline: "Oman Air",
      arrival: { place: "Tokyo", time: Date.now().toString() },
      departure: { place: "Delhi", time: Date.now().toString() },
      price: "38594",
      remainingSeats: 245
    }
  ]
}

export interface FlightRm{
  airline: string;
  arrival: PlaceTimeRm;
  departure: PlaceTimeRm;
  price: string;
  remainingSeats: number;
}

export interface PlaceTimeRm{
  place: string;
  time: string;
}
