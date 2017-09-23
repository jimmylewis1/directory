import { Component, OnInit } from '@angular/core';
import { Response } from "@angular/http";
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {
  public support: any[];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
      this.httpService.getSupportTeam()
          .subscribe(
              (response: Response) => {
                  const data = response.json();
                  this.support = data;
                  console.log('Support Team:', data);
              },
              (error) => console.log(error)
          );
  }

}
