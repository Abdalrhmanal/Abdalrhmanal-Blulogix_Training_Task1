import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableComponent } from "../../projects/ui/src/lib/table/table.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { TableThridComponent } from "../../projects/ui/src/lib/tablt-t-third/table.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, TableComponent, NavbarComponent, TableThridComponent]
})
export class AppComponent {
  title = 'Blulogix-AP';
}
