import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TaskFirstComponent } from './task-first/task-first.component';
import { TaskSecondComponent } from './task-second/task-second.component';
import { TaskComponent } from './task-third/task-third.component';
import { TaskFourthrComponent } from './task-fourth/task-fourth.component';

export const routes: Routes = [
  {'path':'',component:HomeComponent},
  {'path':'task-f',component:TaskFirstComponent},
  {'path':'task-s',component:TaskSecondComponent},
  {'path':'task-t',component:TaskComponent},
  {'path':'task-fourth',component:TaskFourthrComponent},
];
