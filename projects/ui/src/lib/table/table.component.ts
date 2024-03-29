import { Component , Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'lib-table',
  standalone: true,
  imports: [NgFor],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})

export class TableComponent {
  @Input() tableConfig: any;

  // هنا تم تعريف مصفوفة احادية باسم items لتخزين البيانات وارسالها الى العرض
  items = [
    { firstName: 'John', lastName: 'Doe', email: 'john@example.com' },
    { firstName: 'Jane', lastName: 'Doe', email: 'jane@example.com' },
    { firstName: 'Alice', lastName: 'Smith', email: 'alice@example.com' },
    { firstName: 'Bob', lastName: 'Smith', email: 'bob@example.com' }
  ];

}


