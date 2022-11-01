import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CountryPopulation } from './Country';

@Component({
  selector: 'app-country-population',
  templateUrl: './country-population.component.html',
  styleUrls: ['./country-population.component.css']
})
export class CountryPopulationComponent implements OnInit {
  id?:number;
  countryPopulation!: CountryPopulation;
  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) {
   }

  ngOnInit(): void {
    let idParam = this.activatedRoute.snapshot.paramMap.get('id');
    this.id = idParam ? +idParam : 0;
    let url = `${environment.baseUrl}api/Countries/Population/${this.id}`;
    this.http.get<CountryPopulation>(url).subscribe(result => {
      this.countryPopulation = result;
    });

  }

}
