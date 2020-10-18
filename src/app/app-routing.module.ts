import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrescriptionComponent } from './prescription/prescription.component';

const routes: Routes = [
  { path: '', redirectTo: 'prescription', pathMatch: 'full' },
  { path: 'prescription', component: PrescriptionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
