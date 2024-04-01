import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableComponent } from "../../projects/ui/src/lib/table/table.component";
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, TableComponent,  NavbarComponent]
})
export class AppComponent {
  title = 'Blulogix-AP';
}
