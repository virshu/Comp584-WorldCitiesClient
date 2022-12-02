import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { CounterComponent } from './counter/counter.component';
import { HomeComponent } from './home/home.component';
import { CountriesComponent } from './countries/countries.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CountryPopulationComponent } from './countries/country-population.component';
import { LoginComponent } from './auth/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './auth/auth.interceptor';
import { CitiesComponent } from './cities/cities.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CountryEditComponent } from './countries/country-edit.component';
import { CityEditComponent } from './cities/city-edit.component';
import { HealthCheckComponent } from './health-check/health-check.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    CounterComponent,
    HomeComponent,
    CountriesComponent,
    CountryEditComponent,
    CitiesComponent,
    CountryPopulationComponent,
    LoginComponent,
    CityEditComponent,
    HealthCheckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
      }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
