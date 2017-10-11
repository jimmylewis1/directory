import { Component, OnInit } from '@angular/core';
import { Response } from "@angular/http";
import { NgForm } from "@angular/forms";
import * as _ from 'lodash';

import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-admin-training',
  templateUrl: './admin-training.component.html',
  styleUrls: ['./admin-training.component.scss']
})
export class AdminTrainingComponent implements OnInit {

    public trainers: any[];
    closeResult: string;
    modalReference: NgbModalRef;
    departmentName: string =  'Training';

    constructor(private httpService: HttpService, private modalService: NgbModal) { }

    ngOnInit() {
        this.loadData();
    }

    loadData() {
        this.httpService.getTrainingTeam()
            .subscribe(
                (trainers: any) => {
                    this.trainers = _.values(trainers.json());
                    console.log(this.trainers);
                },
                (error) => console.log(error)
            );
    }

    open(content) {
        this.modalReference = this.modalService.open(content);
        this.modalReference.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }

    onSave(form: NgForm, modalService) {
        const value = form.value;
        console.log(form.value);
        this.httpService.addTrainingEmp(value)
            .subscribe(
                (response: Response) => {
                    const data = response.json();
                    // console.log(data);
                    form.reset();
                    this.modalReference.close();
                    this.loadData();
                },
                (error) => console.log(error)
            );
    }

}
