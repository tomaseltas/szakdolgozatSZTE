import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './mainpage/login/login.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { MealsComponent } from './meals/meals.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { IndividualComponent } from './training/individual/individual.component';
import { TeamComponent } from './training/team/team.component';

const appRoutes: Routes = [
  { path: 'home', component: MainpageComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'individual', component: IndividualComponent },
  { path: 'team', component: TeamComponent },
  { path: 'meals', component: MealsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
