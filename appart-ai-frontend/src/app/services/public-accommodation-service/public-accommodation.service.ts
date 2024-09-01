import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PublicAccommodationService {

  private apiUrl = '/public/api/accommodation'
  private baseUrl: string = environment.apiUrl + this.apiUrl;

  constructor(private http: HttpClient) { }


  public getAccommodationsByFilters() {}

  public getAllAccommodations(page: number, volume: number, /* surement un autre parametre pour la localisation */) {}

  // à voir si je fais vrm une methode public pcq comment on va gérer les consultations si on ne connait pas les utilisateurs qui ont consulté un appart?
  public getAccommodationDetails(accommodationId: string) {}


}
