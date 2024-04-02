import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'preRender',
  standalone: true
})
// بنيت هذا الفلتر من اجل الطلب الثاني في المهمة من اجل العمل على البيانات الجامدة وجعلها اكثر وضوحا
export class PreRenderPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    //لقد اضفت عمود الى الجدول ان كان الموظف يعمل ام لا و قيمة راتبه وذلك من اجل رؤية التعديلات بوضوح
    //اذا كانت القيمة 0 اي false يكون الجواب في العمود No
    if (value === false) {
      return 'No';
    } else if (value === true) {
      //اذا كان الموظف يعمل اي القيمة 1 true فتكن الاجابة Yes
      return 'Yes';
      // اذا كانت القيمة في الجدول رقما اضف $
    } else if (typeof value === 'number') {
      return '$' + value.toFixed(2);
    } else {
      // والا ارجع البيانات كما هي 
      return value;
    }
  }

}
