import { Component } from '@angular/core';
import { TableComponent } from "../../../projects/ui/src/lib/table/table.component";

@Component({
    selector: 'app-task-second',
    standalone: true,
    templateUrl: './task-second.component.html',
    styleUrl: './task-second.component.css',
    imports: [TableComponent]
})
export class TaskSecondComponent {

}
