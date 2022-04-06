import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutrouteComponent } from './components/aboutroute/aboutroute.component';
import { ServicerouteComponent } from './components/serviceroute/serviceroute.component';
import { HomeComponent } from './inicio/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutrouteComponent},
  {path: 'service', component: ServicerouteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
