import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Country } from '../countries/Country';
import { City } from './city';

@Component({
  selector: 'app-city-edit',
  templateUrl: './city-edit.component.html',
  styleUrls: ['./city-edit.component.css']
})
export class CityEditComponent implements OnInit {
  // the view title
  title?: string;

  // the form model
  form!: FormGroup;

  // the city object to edit
  city?: City;
  id?: number;
  countries?: Country[];
  
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private http: HttpClient){}

  ngOnInit(): void {
     this.form = new FormGroup({
      name: new FormControl(''),
      lattitude: new FormControl(''),
      longitude: new FormControl(''),
      countryId: new FormControl('')
    });

    this.loadData();
  }

    loadData() {
      this.loadCountries();

      // retrieve the ID from the 'id' parameter
      let idParam = this.activatedRoute.snapshot.paramMap.get('id');
      let id = idParam ? +idParam : 0;
  
      if (id) {
        
          // fetch the city from the server
          var url = `${environment.baseUrl}api/Cities/${id}`;
          this.http.get<City>(url).subscribe({
            next: result => {
            this.city = result;
            this.title = `Edit - ${this.city.name}`;
      
            // update the form with the city value
            this.form.patchValue(this.city);
          }, 
          error: error => console.error(error)
        });
      }
      else{
        this.title = "Create a new City";
      }
  }

  loadCountries() {
    // fetch all the countries from the server
    var url = environment.baseUrl + 'api/Countries';
    this.http.get<Country[]>(url).subscribe({
      next: result => {
      this.countries = result;
    }, 
    error: error => console.error(error)});
  }

  onSubmit() {
    var city = this.id ? this.city : <City>{};
    if (city) {
      city.name = this.form.controls['name'].value;
      city.lattitude = +this.form.controls['lattitude'].value;
      city.longitude = +this.form.controls['longitude'].value;
      city.countryId = +this.form.controls['countryId'].value;

      if (this.id) {
        // existing city
        let url = environment.baseUrl + 'api/Cities/' + city.id;
        this.http
          .put<City>(url, city)
          .subscribe({next: () => {
            console.log(`City ${city!.id} has been updated.`);

            // go back to cities view
            this.router.navigate(['/cities']);
          }, 
          error: error => console.error(error)});
      } else {
        // new
        var url = `${environment.baseUrl}api/Cities`;
        this.http
          .post<City>(url, city)
          .subscribe({next: result => {
            console.log("City " + result.id + " has been created.");
            // go back to cities view
            this.router.navigate(['/cities']);
          }, 
          error: error => console.error(error)});
      }
    }
  }

}
