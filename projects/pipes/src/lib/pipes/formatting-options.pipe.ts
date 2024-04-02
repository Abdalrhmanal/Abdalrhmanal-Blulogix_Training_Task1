import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formattingOptions',
  standalone: true
})
// لقد بنيت هذا الفلتر من اجل ان يكون عناك عدة خيارات عرض كما في الطلب الثالث من المهمة الثالثة
// بحيث يكون هناك عدة خيارات لفلترة البيانات
export class FormattingOptionsPipe implements PipeTransform {

  transform(value: string, option: string): string {
    switch (option) {
      // من اجل التحويل الى الحروف الكبيرة
      case 'uppercase':
        return value.toUpperCase();
        // من اجل التحويل الى الحروف الصغيرة
      case 'lowercase':
        return value.toLowerCase();
        // من اجل المحافظة و العودة الى الحالة الافتراضية لعرض البيانات
      case 'camelcase':
        return this.toCamelCase(value);
        // من اجل استخدام رموز مع عرض البيانات
      case 'fancy':
        return this.toFancyText(value);
      default:
        return value;
    }
  }

  private toCamelCase(value: string): string {
    // تحويل النص إلى صيغة camelCase
    return value.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
  }

  private toFancyText(value: string): string {
    // إضافة تزيينات لافتة للنص
    return value.split('').map(char => char + '⭐️').join('');
  }
}
