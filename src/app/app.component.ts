import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <div>
    <h1>Acme Product Management</h1>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['/welcome']">Home</a></li>
                    <li><a [routerLink]="['/products']">Product List</a></li>
                    <li><a [routerLink]="['/apa']">Apa</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
    `
})
export class AppComponent {    
  pageTitle: string = 'Acme Product Management';
}
