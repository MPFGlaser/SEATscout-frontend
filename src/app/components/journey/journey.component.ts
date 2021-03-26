import { Component, OnInit } from '@angular/core';
import { Journey } from 'src/app/interfaces/journey';
import { JourneyService } from 'src/app/services/journey.service';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.scss']
})
export class JourneyComponent implements OnInit {
  journeys!: Journey[]; 

  constructor(public journeyService: JourneyService) { }

  ngOnInit(): void {
    this.getJourneys();
  }

  async getJourneys(){
    const journeys = await this.journeyService.getJourneys().toPromise();
    this.journeys = journeys;
  }

}
