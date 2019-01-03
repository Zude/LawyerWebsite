import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  {ImpressumComponent} from './impressum/impressum.component'
import { MainComponent } from "./main/main.component";
import { ContactComponent } from "./contact/contact.component";

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  {path: 'impressum', component: ImpressumComponent},
  {path: 'index', component: MainComponent},
  {path: 'kontakt', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
