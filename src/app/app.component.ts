import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'app works!';
    private showAdminMenu: boolean;

    constructor(private router: Router,) {
        console.log('Route:', this.router.url);
    }

    ngOnInit() {
        if (this.router.url === '/') {
            this.showAdminMenu = false;
        }
        if (this.router.url === '/admin-home') {
            this.showAdminMenu = true;
        }
    }
}
