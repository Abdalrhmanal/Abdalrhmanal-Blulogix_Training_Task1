
import { Component } from '@angular/core';
import { FirstNameFilterPipe } from '../../../../pipes/src/lib/pipes/first-namepip.pipe'; // استيراد الأنبوبة
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { PreRenderPipe } from '../../../../pipes/src/lib/pipes/pre-render.pipe';

@Component({
  selector: 'lib-table-third',
  standalone: true,
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  imports:[FormsModule,NgFor,PreRenderPipe ],
  providers: [FirstNameFilterPipe  ] // توفير الأنبوبة كمزود في المكون
})


export class TableThridComponent {
  items: { firstName: string; lastName: string; email: string;is_works:boolean; salary:Number; }[] = [
    { firstName: 'John', lastName: 'Doe', email: 'john@example.com',is_works: false ,salary:100},
    { firstName: 'Jane', lastName: 'Doe', email: 'jane@example.com',is_works: true ,salary:150},
    { firstName: 'Alice', lastName: 'Smith', email: 'alice@example.com',is_works: true,salary:200 },
    { firstName: 'Bob', lastName: 'Smith', email: 'bob@example.com',is_works: false ,salary:300}
  ];

  filteredItems: { firstName: string; lastName: string; email: string;is_works:boolean; salary:Number; }[] = [];
  filterValue: string = '';

  applyFilters() {
    this.filteredItems = this.items.filter(item =>
      item.firstName.toLowerCase().includes(this.filterValue.toLowerCase()) ||
      item.lastName.toLowerCase().includes(this.filterValue.toLowerCase()) ||
      item.email.toLowerCase().includes(this.filterValue.toLowerCase())||
      (item.is_works ? 'true' : 'false') === this.filterValue ||
      item.salary.toString().includes(this.filterValue)
    );
  }

  constructor() {
    this.applyFilters();
  }
}

//************************************ TASK 2 ****************************** */
// export class TableThridComponent {
//   // قائمة بالبيانات الافتراضية للجدول
//   items: { firstName: string; lastName: string; email: string; }[] = [
//     { firstName: 'John', lastName: 'Doe', email: 'john@example.com' },
//     { firstName: 'Jane', lastName: 'Doe', email: 'jane@example.com' },
//     { firstName: 'Alice', lastName: 'Smith', email: 'alice@example.com' },
//     { firstName: 'Bob', lastName: 'Smith', email: 'bob@example.com' }
//   ];
//  // قائمة بالعناصر المصفاة للعرض
//   filteredItems: { firstName: string; lastName: string; email: string; }[] = [];
//   // قيمة الفلتر لكل عمود
//   firstNameFilter: string = '';
//   lastNameFilter: string = '';
//   emailFilter: string = '';

//   // دالة لتطبيق الفلاتر على البيانات
//   applyFilters() {
//     this.filteredItems = this.items.filter(item =>
//       item.firstName.toLowerCase().includes(this.firstNameFilter.toLowerCase()) &&
//       item.lastName.toLowerCase().includes(this.lastNameFilter.toLowerCase()) &&
//       item.email.toLowerCase().includes(this.emailFilter.toLowerCase())
//     );
//   }
//   constructor() {
//     // تطبيق الفلاتر عند بدء التحميل
//     this.applyFilters();
//   }
// }


