import { Component, OnInit } from '@angular/core';
import { Response } from "@angular/http";
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-executives',
  templateUrl: './executives.component.html',
  styleUrls: ['./executives.component.scss']
})
export class ExecutivesComponent implements OnInit {

    public execs: any[];

    constructor(private httpService: HttpService) { }

    ngOnInit() {
        this.httpService.getExecutives()
            .subscribe(
                (response: Response) => {
                    const data = response.json();
                    this.execs = data;
                },
                (error) => console.log(error)
            );
    }

}
