import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { City } from './city';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  cities: City[] = [];
  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient){}

  ngOnInit(): void {
    let idParam = this.activatedRoute.snapshot.paramMap.get('id');
    let countryId = idParam ? +idParam : null;

    let url = countryId ? `${environment.baseUrl}api/Countries/Cities/${countryId}` : `${environment.baseUrl}api/Cities`;
    this.http.get<City[]>(url).subscribe(result => {
      this.cities = result;
    });
  }

}
