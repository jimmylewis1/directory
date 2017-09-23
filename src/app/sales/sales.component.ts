import { Component, OnInit } from '@angular/core';
import { Response } from "@angular/http";
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
  public sales: any[];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getSalesTeam()
        .subscribe(
            (response: Response) => {
                const data = response.json();
                this.sales = data;
                console.log('Sales Team:', data);
            },
            (error) => console.log(error)
        );
  }

}
