import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { CitiesComponent } from './cities/cities.component';
import { CityEditComponent } from './cities/city-edit.component';
import { CounterComponent } from './counter/counter.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryEditComponent } from './countries/country-edit.component';
import { CountryPopulationComponent } from './countries/country-population.component';
import { HealthCheckComponent } from './health-check/health-check.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'cities/:id', component: CitiesComponent },
  { path: 'cities', component: CitiesComponent },
  { path: 'countries', component: CountriesComponent },
  { path: 'countrypopulation/:id', component: CountryPopulationComponent },
  { path: 'city-edit/:id', component: CityEditComponent },
  { path: 'city-edit', component: CityEditComponent },
  { path: 'country-edit/:id', component: CountryEditComponent },
  { path: 'country-edit', component: CountryEditComponent },
  { path: 'health-check', component: HealthCheckComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
