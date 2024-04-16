import { Component } from '@angular/core';
import { TableThridComponent } from "../../../projects/ui/src/lib/tablt-t-third/table.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-task-third',
    standalone: true,
    templateUrl: './task-third.component.html',
    styleUrl: './task-third.component.css',
    imports: [TableThridComponent ,CommonModule]
})
export class TaskComponent {

}
