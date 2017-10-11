import { Component, OnInit } from '@angular/core';
import { Response } from "@angular/http";
import { NgForm } from "@angular/forms";
import * as _ from 'lodash';

import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-admin-hr-finance',
  templateUrl: './admin-hr-finance.component.html',
  styleUrls: ['./admin-hr-finance.component.scss']
})
export class AdminHrFinanceComponent implements OnInit {

    public hrFinance: any[];
    closeResult: string;
    modalReference: NgbModalRef;
    departmentName: string =  'HR/Finance';

    constructor(private httpService: HttpService, private modalService: NgbModal) { }

    ngOnInit() {
        this.loadData();
    }

    loadData() {
        this.httpService.getHrFinanceTeam()
            .subscribe(
                (hrFinance: any) => {
                    this.hrFinance = _.values(hrFinance.json());
                    console.log(this.hrFinance);
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
        this.httpService.addHrFinanceEmp(value)
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
