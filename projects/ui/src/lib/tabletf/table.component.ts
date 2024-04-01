
import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'lib-tabletf',
  standalone: true,
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  imports:[NgFor],
  providers: []
})

export class TableComponenttf {
  // قائمة بالبيانات الافتراضية للجدول
  items: { firstName: string; lastName: string; email: string; }[] = [
    { firstName: 'John', lastName: 'Doe', email: 'john@example.com' },
    { firstName: 'Jane', lastName: 'Doe', email: 'jane@example.com' },
    { firstName: 'Alice', lastName: 'Smith', email: 'alice@example.com' },
    { firstName: 'Bob', lastName: 'Smith', email: 'bob@example.com' }
  ];

}
