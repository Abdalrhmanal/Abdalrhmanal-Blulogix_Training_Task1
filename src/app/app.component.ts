import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableComponent } from "../../projects/ui/src/lib/table/table.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { TableThridComponent } from "../../projects/ui/src/lib/tablt-t-third/table.component";
import { TableFourthComponent } from "../../projects/ui/src/lib/tablt-fourth-third/table.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, TableComponent, NavbarComponent, TableThridComponent, TableFourthComponent]
})
export class AppComponent {
  title = 'Blulogix-AP';
}
