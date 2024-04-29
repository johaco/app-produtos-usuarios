import { Component } from "@angular/core";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [CommonModule, NavbarComponent, RouterOutlet]
})
export class AppComponent {

  constructor() {}

 
}
