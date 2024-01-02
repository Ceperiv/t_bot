import {inject, Injectable} from '@angular/core';
import {HttpClient, withFetch} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService{
  http = inject(HttpClient);
  getData() {
    const url = 'api/helloworld';
    return this.http.get<any>(url)

  }
}
