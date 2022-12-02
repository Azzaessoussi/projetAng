import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegionNbMalade } from '../model/region-nb-malade';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
host="http://localhost:8082/"
  constructor(private client: HttpClient) { }

  public getList():Observable<RegionNbMalade[]>
  { console.log("ha");
    return this.client.get<RegionNbMalade[]>(this.host+"getPatientsVihByRegion");
  }
}
