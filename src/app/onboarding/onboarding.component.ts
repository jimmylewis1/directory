import { Component, OnInit } from '@angular/core';
import { Response } from "@angular/http";
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit {
    public onboarding: any[];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
      this.httpService.getOnboardingTeam()
          .subscribe(
              (response: Response) => {
                  const data = response.json();
                  this.onboarding = data;
                  console.log('Onboarding Team:', data);
              },
              (error) => console.log(error)
          );
  }

}
