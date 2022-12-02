import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as signalR from "@microsoft/signalr";
import { Result } from './result';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HealthCheckService {
  private hubConnection!: signalR.HubConnection;
  private _result: Subject<Result> = new Subject<Result>();
  public result = this._result.asObservable();

  constructor(private http: HttpClient) { }

  public startConnection() {
    this.hubConnection = new signalR.HubConnectionBuilder()
        .configureLogging(signalR.LogLevel.Information)
        .withUrl(`${environment.baseUrl}api/health-hub`, { withCredentials: false })
        .build();
    console.log("Starting connection...");
    this.hubConnection
      .start()
      .then(() => console.log("Connection started."))
      .catch((err : any) => console.log(err));
    this.updateData();
  }

  public updateData() {
    console.log("Fetching data...");
    this.http.get<Result>(`${environment.baseUrl}api/health`)
      .subscribe(result => {
        this._result.next(result);
        console.log(result);
      });
  }

  public addDataListeners() {
    this.hubConnection.on('Update', (msg) => {
      console.log("Update issued by server for the following reason: " + msg);
      this.updateData();
    });
  }
}
