import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableFourthComponent } from "../../../projects/ui/src/lib/tablt-fourth-third/table.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-task-fourth',
    standalone: true,
    templateUrl: './task-fourth.component.html',
    styleUrl: './task-fourth.component.css',
    imports: [CommonModule, TableFourthComponent ,RouterLink]
})
export class TaskFourthrComponent {

}
