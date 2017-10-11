import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

@Injectable()
export class HttpService {
    constructor(private http: Http) {}
    // storeServers(servers: any[]) {
    //    return this.http.post('https://test-project-ng4.firebaseio.com/users.json', servers);
    // }

    getSalesTeam() {
        return this.http.get('https://wv-emp-dir.firebaseio.com/employees_sales.json');
    }
    getOnboardingTeam() {
        return this.http.get('https://wv-emp-dir.firebaseio.com/employees_onboarding.json');
    }
    getCsmTeam() {
        return this.http.get('https://wv-emp-dir.firebaseio.com/employees_csm.json');
    }
    getSupportTeam() {
        return this.http.get('https://wv-emp-dir.firebaseio.com/employees_support.json');
    }
    getTrainingTeam() {
        return this.http.get('https://wv-emp-dir.firebaseio.com/employees_training.json');
    }
    getHrFinanceTeam() {
        return this.http.get('https://wv-emp-dir.firebaseio.com/employees_hrfinance.json');
    }
    getExecutives() {
        return this.http.get('https://wv-emp-dir.firebaseio.com/executives.json');
    }


    addSalesEmp(employee) {
        return this.http.post('https://wv-emp-dir.firebaseio.com/employees_sales.json', employee);
    }
    addOnboardingEmp(employee) {
        return this.http.post('https://wv-emp-dir.firebaseio.com/employees_onboarding.json', employee);
    }
    addSupportEmp(employee) {
        return this.http.post('https://wv-emp-dir.firebaseio.com/employees_support.json', employee);
    }
    addCsmEmp(employee) {
        return this.http.post('https://wv-emp-dir.firebaseio.com/employees_csm.json', employee);
    }
    addTrainingEmp(employee) {
        return this.http.post('https://wv-emp-dir.firebaseio.com/employees_training.json', employee);
    }
    addHrFinanceEmp(employee) {
        return this.http.post('https://wv-emp-dir.firebaseio.com/employees_hrfinance.json', employee);
    }
    addExecutiveEmp(employee) {
        return this.http.post('https://wv-emp-dir.firebaseio.com/executives.json', employee);
    }
}
