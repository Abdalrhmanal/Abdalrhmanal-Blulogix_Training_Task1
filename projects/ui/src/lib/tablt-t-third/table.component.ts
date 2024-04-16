
import { Component, Input, TemplateRef } from '@angular/core';
import { FirstNameFilterPipe } from '../../../../pipes/src/lib/pipes/first-namepip.pipe'; // استيراد الأنبوبة
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { PreRenderPipe } from '../../../../pipes/src/lib/pipes/pre-render.pipe';
import { FormattingOptionsPipe } from '../../../../pipes/src/lib/pipes/formatting-options.pipe';

@Component({
  selector: 'lib-table-third',
  standalone: true,
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  imports: [FormsModule, NgFor, PreRenderPipe, FormattingOptionsPipe],
  providers: [FirstNameFilterPipe] // توفير الأنبوبة كمزود في المكون
})


export class TableThridComponent {

  @Input() customTemplate!: TemplateRef<any>;

  items: { firstName: string; lastName: string; email: string; is_works: boolean; salary: Number; }[] = [
    { firstName: 'John', lastName: 'Doe', email: 'john@example.com', is_works: false, salary: 100 },
    { firstName: 'Jane', lastName: 'Doe', email: 'jane@example.com', is_works: true, salary: 150 },
    { firstName: 'Alice', lastName: 'Smith', email: 'alice@example.com', is_works: true, salary: 200 },
    { firstName: 'Bob', lastName: 'Smith', email: 'bob@example.com', is_works: false, salary: 300 }
  ];
// دمجت الفلاتر السابقة في المهمة الثانية الى فلتر واحد كما في المهمة الثالثة
  filteredItems: { firstName: string; lastName: string; email: string; is_works: boolean; salary: Number; }[] = [];
  filterValue: string = '';
  selectedRenderOption: string = 'Camelcase';

  applyFilters() {
    this.filteredItems = this.items.filter(item =>
      item.firstName.toLowerCase().includes(this.filterValue.toLowerCase()) ||
      item.lastName.toLowerCase().includes(this.filterValue.toLowerCase()) ||
      item.email.toLowerCase().includes(this.filterValue.toLowerCase()) ||
      (item.is_works ? 'true' : 'false') === this.filterValue ||
      item.salary.toString().includes(this.filterValue)
    );
  }
// فلترة البيانات عندما تكن جاهزة
  constructor() {
    this.applyFilters();
  }
}
