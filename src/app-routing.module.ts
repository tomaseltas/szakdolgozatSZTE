import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './app/mainpage/mainpage.component';
import { LoginComponent } from './app/mainpage/login/login.component';
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {path:'',component: MainpageComponent},
  {path:'login',component:LoginComponent},
  
  {path:'**', component:PageNotFoundComponent}
  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
