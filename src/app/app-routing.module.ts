import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { QuotesComponent } from './quotes/quotes.component';
import { AddQuotesComponent } from './add-quotes/add-quotes.component';

const routes: Routes = [
  {path: '',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'edit',component:EditComponent},
  {path:'new',component: CreateComponent},
  {path:'edit/:id',component: EditDetailsComponent},
  {path:'quotes/:id',component:QuotesComponent,children:[
    {path:'addquotes/:id',component:AddQuotesComponent},
  ]},
  {path:'**',component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingcomponent=[HomeComponent,QuotesComponent,EditComponent,EditDetailsComponent,PagenotfoundComponent,CreateComponent,AddQuotesComponent]