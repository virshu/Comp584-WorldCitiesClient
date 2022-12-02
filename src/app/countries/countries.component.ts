import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Country } from './Country';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  public countries!: Country[];
  constructor(private http: HttpClient) { }
  faPencil = faPencil;

  ngOnInit(): void {
    let url = environment.baseUrl + 'api/Countries';
    this.http.get<Country[]>(url).subscribe(result => {
      this.countries = result;
    });
  }

}
