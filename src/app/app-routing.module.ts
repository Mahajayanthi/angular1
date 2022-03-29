import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { CanteenListComponent } from './canteen-list/canteen-list.component';
import { AddcanteenComponent } from './add-canteen/add-canteen.component';

const routes: Routes = [
  { path: '', redirectTo: 'view-canteen', pathMatch: 'full' },
  { path: 'view-canteen', component: CanteenListComponent },
  { path: 'add-canteen', component: AddcanteenComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
