import { Component, OnInit } from '@angular/core';
import { Response } from "@angular/http";
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {
  public training: any[];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
      this.httpService.getTrainingTeam()
          .subscribe(
              (response: Response) => {
                  const data = response.json();
                  this.training = data;
                  console.log('Training Team:', data);
              },
              (error) => console.log(error)
          );
  }

}
