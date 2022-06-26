import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LoginComponent } from './mainpage/login/login.component';
import { ExerciseComponent } from './mainpage/exercise/exercise.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';

import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { FontAwesomeModule  } from '@fortawesome/angular-fontawesome';
import {AngularFireModule} from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { RegisterComponent } from './register/register.component';
import { MustMatchDirective } from './helper/must-match.directive';
import { IndividualComponent } from './training/individual/individual.component';
import { TeamComponent } from './training/team/team.component';
import { MealsComponent } from './meals/meals.component';
import { MotivationComponent } from './motivation/motivation.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    LoginComponent,
    ExerciseComponent,
    HeaderComponent,
    PageNotFoundComponent,
    RegisterComponent,
    MustMatchDirective,
    IndividualComponent,
    TeamComponent,
    MealsComponent,
    MotivationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    AppRoutingModule,
    MatListModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
  MatToolbarModule,
  ToastrModule.forRoot(),
  MatCardModule,
  MatMenuModule,
  MatButtonModule,
  FormsModule,
  MatTableModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatOptionModule,
  AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
