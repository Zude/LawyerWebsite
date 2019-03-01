import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  {ImpressumComponent} from './impressum/impressum.component'
import { MainComponent } from "./main/main.component";
import { ContactComponent } from "./contact/contact.component";

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {path: 'impressum', component: ImpressumComponent},
  {path: '', component: MainComponent},
  {path: 'datenschutz', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
