import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrivateAccommodationService {

  private apiUrl = '/protected/api/accommodation'
  private baseUrl: string = environment.apiUrl + this.apiUrl;

  constructor(private http: HttpClient) { }

  // Antoine
  public getUserSuggestedAccommodations(userId: string, page: number, quantity: number, token: string) {}

  // faut que je me rappel d'incrémenter le nb de viewing et ajouter une relation dans bd
  public getAccommodationDetails(userId: string, accommodationId: string, token: string) {}

  public createInterestRelation(userId: string, accommodationId: string, token: string) {}

  public addCommentToAccommodation(userId: string, /*Comment object */) {}

  public showAccommodationInterestedUsers(accommodationId: string) {}
  
}
