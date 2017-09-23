import { Component, OnInit } from '@angular/core';
import { Response } from "@angular/http";
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-csms',
  templateUrl: './csms.component.html',
  styleUrls: ['./csms.component.scss']
})
export class CsmsComponent implements OnInit {
  public csms: any[];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
      this.httpService.getCsmTeam()
          .subscribe(
              (response: Response) => {
                  const data = response.json();
                  this.csms = data;
                  console.log('CSM Team:', data);
              },
              (error) => console.log(error)
          );
  }

}
