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
    { First: 'Abdulrahman', Last: 'Al-Sarakbi', Email: 'Abdurahman1@code.com' },
    { First: 'Khaled', Last: 'Al-Sarakbi', Email: 'Khaled642@code.com' },
    { First: 'Yahea', Last: 'Al-Sarakbi', Email: 'Yahea155@code.com' },
    { First: 'Ahmad', Last: 'Al-Sarakbi', Email: 'Ahmad812@code.com' },
  ];

}


