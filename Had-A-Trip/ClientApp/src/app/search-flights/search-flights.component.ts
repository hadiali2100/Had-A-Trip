import { Component } from '@angular/core';
//import { time } from 'console';
import { FlightService } from './../api/services/flight.service'
import { FlightRm } from './../api/models'

@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.css']
})
export class SearchFlightsComponent {

  searchFlights: FlightRm[] = []

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {

  }

  search() {
    this.flightService.searchFlight({})
      .subscribe(response => this.searchFlights = response, this.handleError);
  }

  private handleError(err: any) {
    console.log(err);
  } 

}
