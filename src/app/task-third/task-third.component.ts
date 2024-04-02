import { Component } from '@angular/core';
import { TableThridComponent } from "../../../projects/ui/src/lib/tablt-t-third/table.component";

@Component({
    selector: 'app-task-third',
    standalone: true,
    templateUrl: './task-third.component.html',
    styleUrl: './task-third.component.css',
    imports: [TableThridComponent ]
})
export class TaskComponent {

}
