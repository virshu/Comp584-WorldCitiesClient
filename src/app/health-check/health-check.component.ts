import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HealthCheckService } from './health-check.service';
import { Result } from './result';

@Component({
  selector: 'app-health-check',
  templateUrl: './health-check.component.html',
  styleUrls: ['./health-check.component.css']
})
export class HealthCheckComponent implements OnInit {
  public result: Observable<Result | null>;

  constructor(public service: HealthCheckService) {
    this.result = service.result;
  }
  ngOnInit(): void {
    this.service.startConnection();
    this.service.addDataListeners();
  }
}
