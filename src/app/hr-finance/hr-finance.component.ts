import { Component, OnInit } from '@angular/core';
import { Response } from "@angular/http";
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-hr-finance',
  templateUrl: './hr-finance.component.html',
  styleUrls: ['./hr-finance.component.scss']
})
export class HrFinanceComponent implements OnInit {
  public hrFinance: any[];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
      this.httpService.getHrFinanceTeam()
          .subscribe(
              (response: Response) => {
                  const data = response.json();
                  this.hrFinance = data;
                  console.log('HR/Finance Team:', data);
              },
              (error) => console.log(error)
          );
  }

}
