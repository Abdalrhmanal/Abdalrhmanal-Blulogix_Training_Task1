
import { Component, Input } from '@angular/core';
import { FirstNameFilterPipe } from '../../../../pipes/src/lib/pipes/first-namepip.pipe'; // استيراد الأنبوبة
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'lib-table',
  standalone: true,
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  imports:[FormsModule,NgFor],
  providers: [FirstNameFilterPipe] // توفير الأنبوبة كمزود في المكون
})

export class TableComponent {
  // قائمة بالبيانات الافتراضية للجدول
  items: { firstName: string; lastName: string; email: string; }[] = [
    { firstName: 'John', lastName: 'Doe', email: 'john@example.com' },
    { firstName: 'Jane', lastName: 'Doe', email: 'jane@example.com' },
    { firstName: 'Alice', lastName: 'Smith', email: 'alice@example.com' },
    { firstName: 'Bob', lastName: 'Smith', email: 'bob@example.com' }
  ];
 // قائمة بالعناصر المصفاة للعرض
  filteredItems: { firstName: string; lastName: string; email: string; }[] = [];
  // قيمة الفلتر لكل عمود
  firstNameFilter: string = '';
  lastNameFilter: string = '';
  emailFilter: string = '';
  
  // دالة لتطبيق الفلاتر على البيانات
  applyFilters() {
    this.filteredItems = this.items.filter(item =>
      item.firstName.toLowerCase().includes(this.firstNameFilter.toLowerCase()) &&
      item.lastName.toLowerCase().includes(this.lastNameFilter.toLowerCase()) &&
      item.email.toLowerCase().includes(this.emailFilter.toLowerCase())
    );
  }
  constructor() {
    // تطبيق الفلاتر عند بدء التحميل
    this.applyFilters();
  }
}
