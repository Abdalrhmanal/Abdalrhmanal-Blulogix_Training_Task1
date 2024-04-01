import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TaskFirstComponent } from './task-first/task-first.component';
import { TaskSecondComponent } from './task-second/task-second.component';
import { TaskThirdComponent } from './task-third/task-third.component';

export const routes: Routes = [
  {'path':'',component:HomeComponent},
  {'path':'task-f',component:TaskFirstComponent},
  {'path':'task-s',component:TaskSecondComponent},
  {'path':'task-t',component:TaskThirdComponent},
];
