import { Pipe, PipeTransform } from '@angular/core';

// إنشاء فلتر باسم 'firstNameFilter'
@Pipe({
  name: 'firstNameFilter'
})
export class FirstNameFilterPipe implements PipeTransform {

  // دالة التحويل التي تُطبق الفلتر على البيانات
  transform(items: any[], searchText: string): any[] {
    // التحقق مما إذا كانت البيانات فارغة
    if (!items) {
      return [];
    }
    // التحقق مما إذا كانت سلسلة البحث فارغة، في حالة فارغة يتم إرجاع البيانات كاملة
    if (!searchText) {
      return items;
    }
    // تحويل سلسلة البحث إلى حالة صغيرة للمقارنة الدقيقة
    searchText = searchText.toLowerCase();
    // تطبيق الفلتر على البيانات: البحث عن العناصر التي تحتوي على النص المُبحوث في الاسم الأول
    return items.filter(item => {
      return item.firstName.toLowerCase().includes(searchText);
    });
  }
}
